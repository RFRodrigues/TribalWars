package Utility;

import javafx.fxml.Initializable;
import javafx.scene.media.Media;
import javafx.util.Duration;

import java.net.URL;
import java.util.ResourceBundle;

public class TBWMediaPlayer{

    private static URL titleMusic = TBWMediaPlayer.class.getClassLoader().getResource("Assets/SOUND/titleMusic.mp3");
    private int volumeIntensity;

    public int getVolumeIntensity() {
        return volumeIntensity;
    }

    public void setVolumeIntensity(int volumeIntensity) {
        this.volumeIntensity = volumeIntensity;
    }

    private static javafx.scene.media.MediaPlayer mediaPlayer;

    public static javafx.scene.media.MediaPlayer getMediaPlayer() {
        return mediaPlayer;
    }

    public static void playTitle(double volumeLevel) {
        try {
            mediaPlayer = new javafx.scene.media.MediaPlayer(new Media(titleMusic.toString()));
            mediaPlayer.setOnEndOfMedia(() -> mediaPlayer.seek(Duration.ZERO));
            mediaPlayer.play();
            mediaPlayer.setVolume(volumeLevel);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public static void setVolume (Double volume){
        mediaPlayer.setVolume(volume);
    }
}
