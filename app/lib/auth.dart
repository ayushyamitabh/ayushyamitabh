import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

FirebaseAuth _auth = FirebaseAuth.instance;

class Auth extends StatefulWidget{
  static final String routeName = 'auth';
  createState()=> new AuthState();
}

class AuthState extends State<Auth>{
  final TextEditingController _emailController = new TextEditingController();
  final TextEditingController _passwordController = new TextEditingController();
  BuildContext authContext;
  void login(){
    print( {'email': _emailController.text,'password': _passwordController.text});
    _auth.signInWithEmailAndPassword(email: _emailController.text, password: _passwordController.text).catchError((onError){
      print(onError);
      Scaffold.of(this.authContext).showSnackBar(new SnackBar(content: new Text(onError.message),));
    });
  }
  @override
  Widget build(BuildContext context) {
    return new SafeArea(
      child: new Scaffold(
        body: new Builder(
          builder:(BuildContext context){ 
            this.authContext = context;
            return new Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[

                new Container(
                  margin: EdgeInsets.fromLTRB(0.0, 10.0, 0.0, 10.0),
                  child: new Text('Ayushya Amitabh',
                    style: new TextStyle(
                      fontSize: 29.0,
                      color: Colors.grey
                    ),
                  )
                ),

                new Container(
                  margin: EdgeInsets.fromLTRB(50.0, 10.0, 50.0, 10.0),
                  child: new TextField(
                    controller: _emailController,
                    decoration: new InputDecoration(
                      labelText: 'E-Mail',
                      filled: true
                    ),
                  )
                ),

                new Container(
                  margin: EdgeInsets.fromLTRB(50.0, 10.0, 50.0, 10.0),
                  child: new TextField(
                    controller: _passwordController,
                    obscureText: true,
                    decoration: new InputDecoration(
                      labelText: 'Password',
                      filled: true
                    ),
                  )
                ),

                new Container(
                  margin: EdgeInsets.fromLTRB(50.0, 10.0, 50.0, 10.0),
                  child: new OutlineButton(
                    child: new Text('Login'),
                    onPressed: login,
                    borderSide: new BorderSide(color: Colors.blue[300], width: 1.0),
                  ),
                  width: MediaQuery.of(context).size.width,
                )

              ],
            );
          }
        )
      )
    );
  }
}