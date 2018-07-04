import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'auth.dart';
import 'home.dart';

FirebaseAuth _auth = FirebaseAuth.instance;

void main() => runApp(new MyApp());

class MyApp extends StatefulWidget {

  @override
  createState() => new MyAppState();
}

class MyAppState extends State<MyApp>  {
  BuildContext context;
  bool _signedIn = false;
  @override
  void initState(){
    super.initState();
    _auth.onAuthStateChanged.listen((FirebaseUser user){
      if (user != null){
        print('***** LOGGED IN');
        setState(() {
          _signedIn = true;
        });
      } else {
        print('***** LOGGED OUT');
        setState(() {
          _signedIn = false;
        });
      }
    });
  }
  @override
  Widget build(BuildContext context) {
    this.context = context;
    return new MaterialApp(
      title: 'Ayushya Amitabh',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: _signedIn ? Home() : Auth()
    );
  }
}