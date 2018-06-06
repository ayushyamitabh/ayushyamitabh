import 'dart:async';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'userview.dart';
import 'login.dart';

final FirebaseAuth _auth = FirebaseAuth.instance;

class ScreenHandler extends StatefulWidget {
        @override
        createState()  => new ScreenHandlerState();
}

class ScreenHandlerState extends State<ScreenHandler>{
        bool _signedIn = false;

        void _signOut() {
                _auth.signOut();
        }

        @override
        Widget build (BuildContext context){
                Stream<FirebaseUser> userStream = _auth.onAuthStateChanged;
                userStream.listen((FirebaseUser user){
                        if (user != null) {
                                setState(() {
                                        _signedIn = true;
                                });
                        } else {
                                setState(() {
                                        _signedIn = false;
                                });
                        }
                });
                return new Scaffold(
                        appBar: new AppBar(
                                title: _signedIn?new Text('Ayushya Amitabh') : new Text('Login'),
                                actions: <Widget>[
                                        new IconButton(
                                                icon: new Icon(_signedIn?Icons.exit_to_app :null),
                                                onPressed: _signedIn? _signOut : null,
                                                tooltip: 'Logout',
                                        )
                                ],
                        ),
                        body: _signedIn?new UserView():new Login()
                );
        }
}