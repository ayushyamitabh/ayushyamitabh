import 'package:flutter/material.dart';
import 'auth.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
        @override
        Widget build(BuildContext context) {
                return new MaterialApp(
                        title: 'Ayushya Amitabh',
                        home: new ScreenHandler(),
                );
        }
}