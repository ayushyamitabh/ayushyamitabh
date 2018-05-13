import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

final FirebaseAuth _auth = FirebaseAuth.instance;

class ScreenHandler extends StatefulWidget {
        @override
        createState()  => new ScreenHandlerState();
}

class ScreenHandlerState extends State<ScreenHandler>{
        final _bckgColor = Color(0xFF42A5F5);
        int _currentIndex =  0;

        @override
        Widget build (BuildContext context){
                return new Scaffold(
                        body: new Scrollable(),
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

        void _changeScreen(int index) {
                setState(() {
                        _currentIndex = index;               
                });
        }
}