package Utility;

import javafx.scene.media.Media;
import javafx.util.Duration;

import java.net.URL;

public class MediaPlayer {

    private URL titleMusic = getClass().getClassLoader().getResource("Assets/SOUND/titleMusic.mp3");
    private javafx.scene.media.MediaPlayer mediaPlayer;

    public javafx.scene.media.MediaPlayer getMediaPlayer() {
        return mediaPlayer;
    }

    public void playTitle() {
        try {
            mediaPlayer = new javafx.scene.media.MediaPlayer(new Media(titleMusic.toString()));
            mediaPlayer.setOnEndOfMedia(() -> mediaPlayer.seek(Duration.ZERO));
            mediaPlayer.play();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}
