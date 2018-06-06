import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

final FirebaseAuth _auth = FirebaseAuth.instance;

class Login extends StatefulWidget{
        @override
        createState() => new LoginState();
}

class LoginState extends State<Login>{
        final emailController = new TextEditingController();
        final passwordController = new TextEditingController();
        bool _loading = false;

        @override
        void dispose() {
                emailController.dispose();
                passwordController.dispose();
                super.dispose();
        }

        @override
        Widget build(BuildContext context){
                return new Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: <Widget>[
                                        new Container(
                                                padding: const EdgeInsets.fromLTRB(30.0,0.0,30.0,0.0),
                                                child: new TextFormField(
                                                        decoration: new InputDecoration(
                                                                labelText: 'Email'
                                                        ),
                                                        keyboardType: TextInputType.emailAddress,
                                                        controller: emailController,
                                                ),
                                        ),
                                        new Container(
                                                padding: const EdgeInsets.fromLTRB(30.0,0.0,30.0,0.0),
                                                child: new TextFormField(
                                                        decoration: new InputDecoration(
                                                                labelText: 'Password',
                                                        ),
                                                        obscureText: true,
                                                        controller: passwordController,
                                                ),
                                        ),
                                        new Container(
                                                padding: const EdgeInsets.fromLTRB(30.0, 30.0, 30.0, 0.0),
                                                child:  _loading?new CircularProgressIndicator(): new Column(
                                                        crossAxisAlignment: CrossAxisAlignment.stretch,
                                                        children: <Widget>[
                                                                new OutlineButton(
                                                                        borderSide: new BorderSide(
                                                                                color: Colors.blue,
                                                                        ),
                                                                        child:new Text('Login'),
                                                                        onPressed: (){
                                                                                setState(() {
                                                                                        _loading = true;
                                                                                });
                                                                                _auth.signInWithEmailAndPassword(email: emailController.text, password: passwordController.text).catchError((err){
                                                                                        setState(() {
                                                                                                _loading= false;
                                                                                        });
                                                                                });
                                                                        },
                                                                )
                                                        ],
                                                ),
                                        )
                                ],
                        );
        }
}