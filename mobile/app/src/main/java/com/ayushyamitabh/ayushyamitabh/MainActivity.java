package com.ayushyamitabh.ayushyamitabh;

import android.app.Activity;
import android.app.ActivityManager;
import android.content.Context;
import android.graphics.Color;
import android.os.Build;
import android.support.annotation.NonNull;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

import static android.widget.Toast.LENGTH_LONG;
import static android.widget.Toast.LENGTH_SHORT;

public class MainActivity extends AppCompatActivity {

    private EditText loginEmail;
    private EditText loginPassword;
    private Button loginButton;
    private FirebaseAuth mAuth;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mAuth = FirebaseAuth.getInstance();
        loginEmail = (EditText) findViewById(R.id.loginEmail);
        loginPassword = (EditText) findViewById(R.id.loginPassword);
        loginButton = (Button) findViewById(R.id.loginButton);

    }

    @Override
    public void onStart() {
        super.onStart();
        FirebaseUser currentUser = mAuth.getCurrentUser();
        if (currentUser != null) {
            loginEditable(false);
            Log.i("User","Logged in");
            mAuth.signOut();
            onStart();
        } else {
            loginEditable(true);
            Log.i("User","Not logged in");
        }
    }

    public void loginEditable(Boolean stauts){
        loginEmail.setEnabled(stauts);
        loginPassword.setEnabled(stauts);
        loginButton.setClickable(stauts);
    }

    public void login(final View view) {
        loginEditable(false);
        mAuth.signInWithEmailAndPassword( loginEmail.getText().toString(), loginPassword.getText().toString())
                .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if (task.isSuccessful()){
                            Log.i("User","Signed In");
                            Snackbar.make(view, "Successfully logged in", 2000).show();
                        } else {
                            loginEditable(true);
                            Log.i("User", "Failed signing in");
                            Snackbar.make(view, "Couldn't login, check your credentials.", 2000).show();
                        }
                    }
                });
    }
}
