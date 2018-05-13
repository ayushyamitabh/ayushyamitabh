/*
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Ayushya Amitabh',
      home: new Scaffold(
        appBar: new AppBar(
          backgroundColor: Color(0xFFFFFFFF),
          title: new Text('Ayushya Amitabh', 
            style: new TextStyle(
              color: Color(0xFF42A5F5)
            ),
            ),
          actions: <Widget>[
            new IconButton(
              icon: new Icon(Icons.more_vert),
              onPressed: null,
              color: Color(0xFF42A5F5),
            )
          ],
          elevation: 0.0,
        ),
        body: null,
        bottomNavigationBar: new BottomNavigation(),
      ),
    );
  }
}

class BottomNavigation extends StatefulWidget {
  @override
  createState() => new BottomNavigationState();
}

class BottomNavigationState extends State<BottomNavigation> {
  int _currentIndex = 0; 
  @override
  Widget build(BuildContext context) {
    return new BottomNavigationBar(
      items: [
        new BottomNavigationBarItem(
          title: new Text('Projects'),
          icon: new Icon(Icons.folder),
          backgroundColor: Color(0xFF42A5F5)
        ),
        new BottomNavigationBarItem(
          title: new Text('Experience'),
          icon: new Icon(Icons.work),
          backgroundColor: Color(0xFF42A5F5)
        ),
        new BottomNavigationBarItem(
          title: new Text('Skills'),
          icon: new Icon(Icons.build),
          backgroundColor: Color(0xFF42A5F5)
        ),
        new BottomNavigationBarItem(
          title: new Text('Timeline'),
          icon: new Icon(Icons.timeline),
          backgroundColor: Color(0xFF42A5F5)
        )
      ],
      onTap: _setIndex,
      currentIndex: _currentIndex,
    );
  }

  void _setIndex(int indexValue) {
    setState(() {
       _currentIndex = indexValue;   
    });
  }
}

class RandomWords extends StatefulWidget {
  @override
  createState() => new RandomWordsState();
}

class RandomWordsState extends State<RandomWords> {
  final _suggestions = <WordPair>[];

  final _saved = new Set<WordPair>();

  final _biggerFont = const TextStyle(fontSize: 18.0);

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('Startup Name Generator'),
        actions: <Widget>[
          new IconButton(icon: new Icon(Icons.list), onPressed: _pushSaved)
        ],
      ),
      body: _buildSuggestions(),
    );
  }

  Widget _buildSuggestions() {
    return new ListView.builder(
      padding: const EdgeInsets.all(16.0),
      itemBuilder: (context, i) {
        if (i.isOdd) return new Divider();

        final index = i ~/ 2;
        if (index >= _suggestions.length) {
          _suggestions.addAll(generateWordPairs().take(10));
        }
        return _buildRow(_suggestions[index]);
      },
    );
  }

  Widget _buildRow(WordPair pair) {
    final alreadySaved = _saved.contains(pair);
    return new ListTile(
      title: new Text(
        pair.asPascalCase,
        style: _biggerFont,
      ),
      trailing: new Icon(
        alreadySaved ? Icons.favorite : Icons.favorite_border,
        color: alreadySaved ? Colors.red : null,
      ),
      onTap: () {
        setState(
          () {
            if (alreadySaved) {
              _saved.remove(pair);
            } else {
              _saved.add(pair);
            }
          },
        );
      },
    );
  }

  void _pushSaved() {
    Navigator.of(context).push(
      new MaterialPageRoute(
        builder: (context) {
          final tiles = _saved.map(
            (pair) {
              return new ListTile(
                title: new Text(
                  pair.asPascalCase,
                  style: _biggerFont,
                ),
              );
            },
          );
          final divided = ListTile
              .divideTiles(
                context: context,
                tiles: tiles,
              )
              .toList();

          return new Scaffold(
            appBar: new AppBar(
              title: new Text('Saved Suggestions'),
            ),
            body: new ListView(children: divided),
          );
        },
      ),
    );
  }
}

 */
