package Utility;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class TBWPropertiesManager {
    Double volume;
    InputStream inputStream;

    public Double getVolumeValues() throws IOException{
        try{
            Properties properties = new Properties();
            String propertiesFile = "config.properties";

            inputStream = getClass().getClassLoader().getResourceAsStream(propertiesFile);
            if (inputStream != null){
                properties.load(inputStream);
                System.out.println("not null");
            } else {
                throw new FileNotFoundException("property file not found." );
            }

            volume = Double.parseDouble(properties.getProperty("volumeLevel"));


        } catch (Exception e){
            e.printStackTrace();
        }
        finally {
            inputStream.close();
        }
        return volume;
    }

    public void setVolumeValues(Double volumeLevel){
        Properties properties = new Properties();
        String propertiesFile = "config.properties";
        FileOutputStream fos = null;
        String volumeLevels = volumeLevel.toString();
        try {
            fos = new FileOutputStream("/config.properties");
            properties.put("volumeLevel", volumeLevels);
            properties.store(fos, "");
        } catch (IOException e){
            e.printStackTrace();
        }
        finally {
            try {
                if (fos != null){
                    fos.close();
                }
            } catch (Exception e){
                e.printStackTrace();
            }
        }
    }


}
