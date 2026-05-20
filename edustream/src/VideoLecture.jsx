import { useParams } from 'react-router-dom';

export default function VideoLecture() {
  const { id } = useParams();
  return <div><h2>Video Lecture {id}</h2></div>;
}
