import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  static final String routeName = 'home';
  createState() => new HomeState();
}

class HomeState extends State<Home> {
  void goBack(){
    if (Navigator.canPop(context))Navigator.pop(context);
  }
  @override
  Widget build(BuildContext context) {
    return new SafeArea(
      child: Scaffold(
        body: new Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            new Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[new Text('Home')],
            ),
            new Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                new OutlineButton(
                  onPressed: goBack,
                  child: new Text('Go Back'),
                )
              ],
            )
          ],
        )
      )
    );
  }
}
