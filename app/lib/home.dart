import 'package:flutter/material.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:firebase_auth/firebase_auth.dart';

FirebaseAuth _auth = FirebaseAuth.instance;
FirebaseDatabase _database = FirebaseDatabase.instance;

class Home extends StatefulWidget {
  static final String routeName = 'home';
  createState() => new HomeState();
}

class HomeState extends State<Home> {

  bool _loading = false;
  final TextEditingController _statusController = new TextEditingController();
  BuildContext builderContext;

  void updateStatus () {
    setState(() {
      _loading = true;
    });
    _database.reference().child('Status').set(_statusController.text).then((onValue){
      Scaffold.of(this.builderContext).showSnackBar(
        new SnackBar(
          content: new Text('Updated your status.'),
        )
      );
      setState(() {
        _loading = false;
      });
    }).catchError((err){
      Scaffold.of(this.builderContext).showSnackBar(
        new SnackBar(
          content: new Text(err.message),
        )
      );
      setState(() {
        _loading = false;
      });
    });
  }

  void _getStatus () {
    setState(() {
      _loading = true;
    });
    _database.reference().child('Status').once().then((DataSnapshot snap){
      _statusController.value = new TextEditingValue(text: snap.value);
      setState(() {
        _loading = false;
      });
    }).catchError((err){
      Scaffold.of(this.builderContext).showSnackBar(
        new SnackBar(
          content: new Text(err.message),
        )
      );
      setState(() {
        _loading = false;
      });
    });
  }

  @override
  void initState() {
    super.initState();
    _getStatus();
  }

  @override
  Widget build(BuildContext context) {
    return new SafeArea(
      child: new Scaffold(
        appBar: new AppBar(
          title: new Text('Ayushya Amitabh', style: new TextStyle(color: Colors.grey, fontSize: 24.0),),
          elevation: 0.0,
          backgroundColor: Colors.white,
          centerTitle: true,
        ),
        body: new Builder(
          builder: (BuildContext bContext){
            this.builderContext = bContext;
            return new Column(
              children: <Widget>[
                new Container(
                  height: 3.0,
                  margin: EdgeInsets.only(bottom: 10.0),
                  child: new LinearProgressIndicator(
                    value: _loading ? null: 0.0,
                    backgroundColor: Colors.white,
                  ),
                ),
                new Container(
                  margin: EdgeInsets.fromLTRB(30.0, 10.0, 30.0, 10.0),
                  width: MediaQuery.of(context).size.width,
                  child: new OutlineButton(
                    child: new Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        new Icon(Icons.exit_to_app, size: 18.0,),
                        new Text('Logout', style: new TextStyle(fontSize: 17.0),)
                      ],
                    ),
                    textColor: Colors.redAccent,
                    highlightedBorderColor: Colors.redAccent,
                    splashColor: Colors.red[100],
                    borderSide: new BorderSide(color: Colors.red[400], width: 1.0),
                    onPressed: (){
                      _auth.signOut();
                    },
                  ),
                ),
                new Card(
                  elevation: 4.0,
                  margin: EdgeInsets.fromLTRB(30.0,10.0,30.0,10.0),
                  child: new Container(
                    padding: EdgeInsets.all(20.0),
                    child: new Column(
                      children: <Widget>[
                        new TextField(
                          controller: _statusController,
                          decoration: new InputDecoration(
                            labelText: 'Your Status',
                            filled: true
                          ),
                          maxLines: 5,
                        ),
                        new Container(
                          margin: EdgeInsets.fromLTRB(0.0, 10.0, 0.0, 0.0),
                          width: MediaQuery.of(context).size.width,
                          child: new OutlineButton(
                            child: new Text('Update Status'),
                            onPressed: updateStatus,
                          ),
                        )
                      ],
                    ),
                  )
                ),
                new Container(
                  width: MediaQuery.of(context).size.width,
                  margin: EdgeInsets.fromLTRB(30.0, 10.0, 30.0, 10.0),
                  child: new Text('Sections',
                    style: new TextStyle(
                      fontSize: 18.0,
                      color: Colors.grey[700]
                    ),
                  ),
                ),
                new Container(
                  margin: EdgeInsets.fromLTRB(30.0, 10.0, 30.0, 10.0),
                  width: MediaQuery.of(context).size.width,
                  child: new Column(
                    children: <Widget>[
                      new OutlineButton(
                        child: new Text('Projects'),
                        onPressed: (){},
                        borderSide: new BorderSide(style: wi),
                      ),
                      new OutlineButton(
                        child: new Text('Experience'),
                        onPressed: (){},
                      ),
                      new OutlineButton(
                        child: new Text('Skills'),
                        onPressed: (){},
                      ),
                      new OutlineButton(
                        child: new Text('Events'),
                        onPressed: (){},
                      ),
                    ],
                  )
                )
              ],
            );
          },
        ),
        backgroundColor: Colors.white,  
      )
    );
  }
}
