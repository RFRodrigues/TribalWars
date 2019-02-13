package Utility;

import java.io.PrintWriter;
import java.io.StringWriter;

public class TBWExceptionHandler {

    /*
    Nothing special here!
    just creating a string that can be used anywhere to debug.
    This in the future will be deprecated as I will
    use a pop up system.
     */

    public static void ThrowEX(Exception ex) {
        System.out.println("An error has occurred. Please call an administrator" + "\n" + " -- Error details --" + "\n");
        StringWriter sw = new StringWriter();
        ex.printStackTrace(new PrintWriter(sw));
        String exceptionAsString = sw.toString();
        System.out.println(exceptionAsString);
    }
}
