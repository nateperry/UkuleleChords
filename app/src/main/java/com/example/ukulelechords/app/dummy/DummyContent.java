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
        addItem(new DummyItem("1", "A"));
        addItem(new DummyItem("2", "A#/Bb"));
        addItem(new DummyItem("3", "B"));
        addItem(new DummyItem("4", "C"));
        addItem(new DummyItem("5", "C#/Db"));
        addItem(new DummyItem("6", "D"));
        addItem(new DummyItem("7", "D#/Eb"));
        addItem(new DummyItem("8", "E"));
        addItem(new DummyItem("9", "F"));
        addItem(new DummyItem("10", "F#/Gb"));
        addItem(new DummyItem("11", "G"));
        addItem(new DummyItem("12", "G#/Ab"));
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

        public DummyItem(String id, String content) {
            this.id = id;
            this.content = content;
        }

        @Override
        public String toString() {
            return content;
        }
    }
}
