import 'package:flutter/material.dart';
import 'auth.dart';
import 'home.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Flutter Demo',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: new Auth(),
      routes: {
        Home.routeName : (BuildContext context) => new Home()
      }
    );
  }
}