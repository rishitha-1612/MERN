import React, { useCallback, useMemo, useState } from "react";

type DataItem = {
  value: number;
};

type CommentItem = {
  id: number;
  text: string;
};

type OverlayItem = {
  id: number;
  label: string;
};

type TagItem = {
  id: number;
  label: string;
};

function computeAnalytics(data: DataItem[]) {
  return data.reduce((acc, item) => acc + item.value, 0);
}

const AnalyticsChart = ({ data }: { data: DataItem[] }) => {
  const analytics = useMemo(() => computeAnalytics(data), [data]);
  return <div>Analytics Value: {analytics}</div>;
};

const FilterInput = React.memo(({ onFilter }: { onFilter: (value: string) => void }) => {
  return <input onChange={(e) => onFilter(e.target.value)} placeholder="Filter comments..." />;
});

const CommentsPanel = ({ comments }: { comments: CommentItem[] }) => {
  const [filter, setFilter] = useState("");
  const filtered = useMemo(
    () => comments.filter((c) => c.text.includes(filter)),
    [comments, filter]
  );
  const handleFilter = useCallback(setFilter, []);

  return (
    <div>
      <FilterInput onFilter={handleFilter} />
      <ul>
        {filtered.map((c) => (
          <li key={c.id}>{c.text}</li>
        ))}
      </ul>
    </div>
  );
};

const VideoOverlay = React.memo(({ overlays }: { overlays: OverlayItem[] }) => {
  return (
    <div>
      {overlays.map((o) => (
        <span key={o.id}>{o.label}</span>
      ))}
    </div>
  );
});

const TagList = React.memo(({ tags, filter }: { tags: TagItem[]; filter: string }) => {
  const filteredTags = useMemo(
    () => tags.filter((tag) => tag.label.toLowerCase().includes(filter.toLowerCase())),
    [tags, filter]
  );

  return (
    <ul>
      {filteredTags.map((tag) => (
        <li key={tag.id}>{tag.label}</li>
      ))}
    </ul>
  );
});

const TagInput = React.memo(
  ({
    value,
    onChange,
    onAddTag
  }: {
    value: string;
    onChange: (value: string) => void;
    onAddTag: () => void;
  }) => {
    return (
      <div>
        <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Add tag" />
        <button onClick={onAddTag}>Add Tag</button>
      </div>
    );
  }
);

const VideoControls = ({ onPlay, onPause }: { onPlay: () => void; onPause: () => void }) => (
  <div>
    <button onClick={onPlay}>Play</button>
    <button onClick={onPause}>Pause</button>
  </div>
);

function App() {
  const [playing, setPlaying] = useState(false);
  const [tagFilter, setTagFilter] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [counter, setCounter] = useState(0);
  const [tags, setTags] = useState<TagItem[]>([
    { id: 1, label: "Live Feed" },
    { id: 2, label: "Analytics" },
    { id: 3, label: "Overlay" }
  ]);

  const data = useMemo(
    () => [{ value: 20 }, { value: 30 }, { value: 50 }],
    []
  );

  const comments = useMemo(
    () => [
      { id: 1, text: "Great stream quality" },
      { id: 2, text: "Overlay looks sharp" },
      { id: 3, text: "Analytics are useful" }
    ],
    []
  );

  const overlays = useMemo(
    () => [
      { id: 1, label: "FPS" },
      { id: 2, label: "Bitrate" },
      { id: 3, label: "Latency" }
    ],
    []
  );

  const handlePlay = useCallback(() => setPlaying(true), []);
  const handlePause = useCallback(() => setPlaying(false), []);
  const handleAddTag = useCallback(() => {
    if (!tagInput.trim()) {
      return;
    }

    setTags((current) => [
      ...current,
      {
        id: current.length + 1,
        label: tagInput
      }
    ]);
    setTagInput("");
  }, [tagInput]);

  return (
    <div>
      <h1>StreamVision Video Dashboard</h1>
      <AnalyticsChart data={data} />
      <VideoControls onPlay={handlePlay} onPause={handlePause} />
      <div>Status: {playing ? "Playing" : "Paused"}</div>
      <VideoOverlay overlays={overlays} />
      <CommentsPanel comments={comments} />
      <input
        value={tagFilter}
        onChange={(e) => setTagFilter(e.target.value)}
        placeholder="Filter tags"
      />
      <TagInput value={tagInput} onChange={setTagInput} onAddTag={handleAddTag} />
      <TagList tags={tags} filter={tagFilter} />
      <button onClick={() => setCounter((value) => value + 1)}>Unrelated Count: {counter}</button>
    </div>
  );
}

export default App;
