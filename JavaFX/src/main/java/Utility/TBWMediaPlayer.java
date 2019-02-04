package Utility;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.Initializable;
import javafx.scene.media.Media;
import javafx.util.Duration;

import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.ResourceBundle;

public class TBWMediaPlayer implements Initializable {

    private static URL titleMusic = TBWMediaPlayer.class.getClassLoader().getResource("Assets/SOUND/titleMusic.mp3");
    private static URL TBWAmbience01 = TBWMediaPlayer.class.getClassLoader().getResource("Assets/SOUND/TBWambience01.mp3");
    private static URL TBWAmbience02 = TBWMediaPlayer.class.getClassLoader().getResource("Assets/SOUND/TBWambience02.mp3");
    private static URL TBWAmbience03 = TBWMediaPlayer.class.getClassLoader().getResource("Assets/SOUND/TBWambience03.mp3");

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

    public static void setVolume(Double volume) {
        mediaPlayer.setVolume(volume);
    }

    public static void playSoundtrack(int mediaTracks, double volumeLevel) {
        String soundtrack = "";
        switch (mediaTracks) {
            case 0:
                soundtrack = titleMusic.toString();
                break;
            case 1:
                soundtrack = TBWAmbience01.toString();
                break;
            case 2:
                soundtrack = TBWAmbience02.toString();
                break;
            case 3:
                soundtrack = TBWAmbience03.toString();
                break;
        }
        try {
            mediaPlayer = new javafx.scene.media.MediaPlayer(new Media(soundtrack));
            mediaPlayer.setOnEndOfMedia(() -> mediaPlayer.seek(Duration.ZERO));
            mediaPlayer.play();
            mediaPlayer.setVolume(volumeLevel);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void initialize(URL location, ResourceBundle resources) {

    }
}
