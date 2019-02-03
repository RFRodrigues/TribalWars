package Utility;

import java.io.*;
import java.util.Properties;

public class TBWPropertiesManager {
    Properties prop = new Properties();
    OutputStream output = null;
    InputStream input = null;

    public void writeAudioVolume(Double volume) {
        String levels = volume.toString();
        try {
            output = new FileOutputStream("TBWConfig.properties");
            prop.setProperty("volumeLevel", levels);
            prop.store(output, null);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (output != null) {
                try {
                    output.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public Double readAudioVolume() {
        double audioVolume = 0.0;
        try {
            input = new FileInputStream("TBWConfig.properties");
            prop.load(input);
            audioVolume = Double.parseDouble(prop.getProperty("volumeLevel"));
        } catch (Exception e){
            e.printStackTrace();
        } finally {
            if (input != null){
                try {
                    input.close();
                } catch (IOException e){
                    e.printStackTrace();
                }
            }
        }
        return audioVolume;
    }

}
