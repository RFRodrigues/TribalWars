package tribalWarsApp;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.database.FirebaseDatabase;

import java.io.FileInputStream;

public class Firebase {

    public void FirebaseTesting() {
        FileInputStream serviceAccount;
        try {
            serviceAccount = new FileInputStream("credentials.json");
            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl("https://tribalwars-15493.firebaseio.com/")
                    .build();
            FirebaseApp.initializeApp(options);
            System.out.println("Connection Done");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
