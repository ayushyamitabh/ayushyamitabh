import 'package:flutter/material.dart';
import 'package:firebase_database/firebase_database.dart';

FirebaseDatabase _database = FirebaseDatabase.instance;

class UserView extends StatefulWidget{
        @override
        createState() => new UserViewState();
}

class UserViewState extends State<UserView>{
        
        final _bckgColor = Color(0xFF42A5F5);
        int _currentIndex =  0;
        
        void _changeScreen(int index) {
                setState(() {
                        _currentIndex = index;               
                });
        }

        @override
        Widget build(BuildContext context) {
                return new Scaffold(
                        body: null,
                        floatingActionButton: new FloatingActionButton(
                                tooltip: 'Refresh',
                                child: new Icon(Icons.refresh, color: Colors.white),
                                onPressed: (){
                                        print('should refresh');
                                },
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