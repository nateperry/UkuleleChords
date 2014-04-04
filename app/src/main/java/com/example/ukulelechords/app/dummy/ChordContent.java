package com.example.ukulelechords.app.dummy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Helper class for providing sample content for user interfaces created by
 * Android template wizards.
 * <p>
 * TODO: Replace all uses of this class before publishing your app.
 */
public class ChordContent {

    /**
     * An array of sample (dummy) items.
     */
    public static List<Chord> CHORDS = new ArrayList<Chord>();

    /**
     * A map of sample (dummy) items, by ID.
     */
    public static Map<String, Chord> CHORD_MAP = new HashMap<String, Chord>();

    static {
        // Using hex for some of the fingerings, leading 0 defaults to octal!
        addItem(new Chord("1", "A", 2220));
        addItem(new Chord("2", "Am", 2210));
        addItem(new Chord("3", "A7", 2223));
        addItem(new Chord("4", "A#/Bb", 0xCEE));
        addItem(new Chord("5", "Bbm", 3321));
        addItem(new Chord("6", "B", 1402));
        addItem(new Chord("7", "Bm", 0x1B0));
        addItem(new Chord("8", "B7", 1202));
        addItem(new Chord("9", "C", 2010));
        addItem(new Chord("10", "Cm", 1013));
        addItem(new Chord("11", "C7", 2313));
        addItem(new Chord("12", "C#/Db", 3120));
        addItem(new Chord("13", "D", 0xE8));
        addItem(new Chord("14", "Dm", 0xE7)); // 0231
        addItem(new Chord("15", "D7", 0xD4)); // 0212
        addItem(new Chord("16", "D#/Eb", 1343));
        addItem(new Chord("17", "Ebm", 1342));
        addItem(new Chord("18", "E", 2100));
        addItem(new Chord("19", "Em", 2000));
        addItem(new Chord("20", "F", 3211));
        addItem(new Chord("21", "Fm", 3111));
        addItem(new Chord("22", "F#/Gb", 4322));
        addItem(new Chord("23", "G", 0x0003));
        addItem(new Chord("24", "Gm", 0x14D)); // 0333
        addItem(new Chord("25", "G#/Ab", 1114));
    }

    private static void addItem(Chord item) {
        CHORDS.add(item);
        CHORD_MAP.put(item.id, item);
    }

    /**
     * A dummy item representing a piece of content.
     */
    public static class Chord {
        public String id;
        public String content;
        public int fingering;

        public Chord(String id, String content, int fingering) {
            this.id = id;
            this.content = content;
            this.fingering = fingering;
        }

        @Override
        public String toString() {
            return content;
        }

        public void setFingering(int fingering) {
            this.fingering = fingering;
        }

        private int getFingering(){
            return this.fingering;
        }
    }
}
