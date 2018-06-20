import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:firebase_database/firebase_database.dart';

FirebaseDatabase _database = FirebaseDatabase.instance;

class UserView extends StatefulWidget{
        @override
        createState() => new UserViewState();
}

class UserViewState extends State<UserView>{
        
        final _bckgColor = Color(0xFF42A5F5);
        final _sectionNames = ['Projects','Experience','Skills','Events'];
        int _currentIndex =  0;
        ListView bodyView;

        void _changeScreen(int index) {
                setState(() {
                        _currentIndex = index;               
                });
                print('called changeScreen');
                _getData();
        }

        void _getData () {
                print('called getData');
                _database.reference().child(_sectionNames[_currentIndex]).once().then((DataSnapshot snapshot){
                        if (snapshot.value != null) {
                                List<Widget> listItems = [];
                                if (_currentIndex == 0) {
                                        for ( var value in snapshot.value.values){
                                                listItems.add(
                                                        new Card(
                                                                child: new Column(
                                                                        children: <Widget>[
                                                                                new ListTile(
                                                                                        title: new Text(value['name']),
                                                                                )
                                                                        ],
                                                                ),
                                                        )
                                                );
                                        }
                                }
                                else  {
                                        print(snapshot.value);
                                }
                                setState(() {
                                        bodyView = new ListView(children: listItems,);
                                });
                        }
                });
        }

        @override
        Widget build(BuildContext context) {
                return new Scaffold(
                        body: bodyView,
                        floatingActionButton: new FloatingActionButton(
                                tooltip: 'Refresh',
                                child: new Icon(Icons.refresh, color: Colors.white),
                                onPressed: _getData,
                        ),
                        bottomNavigationBar: new BottomNavigationBar(
                                currentIndex: _currentIndex,
                                onTap: _changeScreen,
                                items: [
                                        new BottomNavigationBarItem(
                                                title: new Text('Projects'),
                                                icon:  new Icon(Icons.folder),
                                                backgroundColor:  _bckgColor
                                        ),

                                        new BottomNavigationBarItem(
                                                title: new Text('Experience'),
                                                icon: new Icon(Icons.work),
                                                backgroundColor:  _bckgColor
                                        ),

                                        new BottomNavigationBarItem(
                                                title:  new Text('Skills'),
                                                icon: new Icon(Icons.build),
                                                backgroundColor:  _bckgColor
                                        ),

                                        new BottomNavigationBarItem(
                                                title: new Text('Timeline'),
                                                icon: new Icon(Icons.timeline),
                                                backgroundColor:  _bckgColor
                                        )
                                ],
                        ),
                );
        }
}