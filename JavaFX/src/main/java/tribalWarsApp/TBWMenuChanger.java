package tribalWarsApp;

import javafx.scene.layout.AnchorPane;


public class TBWMenuChanger {

    //private static PlanetCatalogController planetCatalogger;


    //public static void getPlanetCatalogController(AnchorPane box) {
    //    planetCatalogger = planetCatalogger == null ? new PlanetCatalogController() : planetCatalogger;
    //    config(box, planetCatalogger);
    //}

    public static void config(AnchorPane box, AnchorPane content) {
        box.getChildren().clear();
        box.getChildren().add(content);
    }
}
