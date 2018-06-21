import 'package:flutter/material.dart';
import 'home.dart';
class Auth extends StatefulWidget{
  createState()=> new AuthState();
}

class AuthState extends State<Auth>{
  void doSomething(){
    Navigator.push(context, MaterialPageRoute(builder: (context)=> new Home()));
  }
  void openBottom(){
    showModalBottomSheet(context: context, builder: (BuildContext context){
      return new Container(
        child: new Text('Sheeeet'),
      );
    });
  }
  @override
  Widget build(BuildContext context) {
    return new SafeArea(
      child: new Scaffold(
        body: new Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            new Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                new Text('Login')
              ],
            ),
            new Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                new OutlineButton(
                  child: new Text('Navigate'),
                  onPressed: doSomething,
                )
              ],
            ),
            new Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                new OutlineButton(
                  child: new Text('Open Bottom'),
                  onPressed: openBottom,
                )
              ],
            )
          ],
        )
      )
    );
  }
}