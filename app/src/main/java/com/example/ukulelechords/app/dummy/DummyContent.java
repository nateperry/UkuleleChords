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
public class DummyContent {

    /**
     * An array of sample (dummy) items.
     */
    public static List<DummyItem> ITEMS = new ArrayList<DummyItem>();

    /**
     * A map of sample (dummy) items, by ID.
     */
    public static Map<String, DummyItem> ITEM_MAP = new HashMap<String, DummyItem>();

    static {
        // Using hex for some of the fingerings, leading 0 defaults to octal!
        addItem(new DummyItem("1", "A", 2220));
        addItem(new DummyItem("2", "A#/Bb", 0xCEE));
        addItem(new DummyItem("3", "B", 1402));
        addItem(new DummyItem("4", "C", 2010));
        addItem(new DummyItem("5", "C#/Db", 3120));
        addItem(new DummyItem("6", "D", 0xE8));
        addItem(new DummyItem("7", "D#/Eb", 1343));
        addItem(new DummyItem("8", "E", 2100));
        addItem(new DummyItem("9", "F", 3211));
        addItem(new DummyItem("10", "F#/Gb", 4322));
        addItem(new DummyItem("11", "G", 0x3));
        addItem(new DummyItem("12", "G#/Ab", 1114));
    }

    private static void addItem(DummyItem item) {
        ITEMS.add(item);
        ITEM_MAP.put(item.id, item);
    }

    /**
     * A dummy item representing a piece of content.
     */
    public static class DummyItem {
        public String id;
        public String content;
        public int fingering;

        public DummyItem(String id, String content, int fingering) {
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
