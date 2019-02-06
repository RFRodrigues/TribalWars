package Utility;

import javafx.scene.media.Media;
import javafx.util.Duration;

import java.net.URL;

public class TBWMediaPlayerST {

    private static TBWMediaPlayerST ourInstance = new TBWMediaPlayerST();

    public static TBWMediaPlayerST getInstance() {
        return ourInstance;
    }

    private static URL titleMusic = TBWMediaPlayerST.class.getClassLoader().getResource("Assets/SOUND/titleMusic.mp3");
    private static URL TBWAmbience01 = TBWMediaPlayerST.class.getClassLoader().getResource("Assets/SOUND/TBWambience01.mp3");
    private static URL TBWAmbience02 = TBWMediaPlayerST.class.getClassLoader().getResource("Assets/SOUND/TBWambience02.mp3");
    private static URL TBWAmbience03 = TBWMediaPlayerST.class.getClassLoader().getResource("Assets/SOUND/TBWambience03.mp3");

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

    public void stop(){
        mediaPlayer.stop();
    }


    public void setVolume(Double volume) {
        mediaPlayer.setVolume(volume);
    }

    public void playSoundtrack(String soundtrackName, double volumeLevel) {
        String soundtrack = soundtrackName;
        switch (soundtrack) {
            case "title":
                soundtrack = titleMusic.toString();
                break;
            case "ambience01":
                soundtrack = TBWAmbience01.toString();
                break;
            case "ambience02":
                soundtrack = TBWAmbience02.toString();
                break;
            case "ambience03":
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

    private TBWMediaPlayerST() {
    }
}
