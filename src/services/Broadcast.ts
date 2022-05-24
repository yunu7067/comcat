export interface Video {
  id: string;
  title: string;
  description: string;
}
export interface Broadcast {
  id: string;
  time: number;
  description: string;
}
export interface BoradcastRoom {
  id: string;
  video: Video;
  isArchive: boolean;
  broadcasts: Broadcast[];
}
export const currentBoradcastRooms: BoradcastRoom[] = [
  {
    id: 'v1',
    video: {
      id: 'yTTCx4-LsLQ',
      title: '집중력 향상을 위한 딥 포커스 음악 - 집중을 위한 12시간 앰비언트 스터디 음악',
      description: 'test',
    },
    isArchive: false,
    broadcasts: [
      {id: 'asdfjklasdfjlasd', time: 170, description: '테스트1입니다.'},
      {id: 'asdfjklasdfasdfjlasd', time: 171, description: '테스트2입니다.'},
      {id: 'asdfjklasafdsdfjlasd', time: 172, description: '테스트3입니다.'},
    ],
  },
  {
    id: 'v2',
    video: {
      id: 'gFeSuaiTq5U',
      title:
        '💚Coffee & Work Jazz Piano Music l 작업할 때, 일할 때 듣기 좋은 음악😍 lRelaxing Jazz Piano Music for Work, Focus',
      description: '- 저희 음악이 마음에 드신다면 구독과 좋아요 부탁드려요!',
    },
    isArchive: false,
    broadcasts: [],
  },
  {
    id: 'v3',
    video: {
      id: 'g1UVhexTLWU',
      title: 'Summer Vibes 🌞 지나친 생각은 그만 - Calm Down And Relax - Lofi Hip Hop Mix',
      description: '➤ Spotify에서 Dreamhop을 확인하십시오: https://spoti.fi/3fNpOgA',
    },
    isArchive: false,
    broadcasts: [],
  },
];

export const addRoom = () => {
  currentBoradcastRooms.push({
    id: `v${String(currentBoradcastRooms.length + 1)}`,
    video: {
      id: `g1UVhexTLWU`,
      title: 'Summer Vibes 🌞 지나친 생각은 그만 - Calm Down And Relax - Lofi Hip Hop Mix',
      description: '➤ Spotify에서 Dreamhop을 확인하십시오: https://spoti.fi/3fNpOgA',
    },
    isArchive: false,
    broadcasts: [],
  });
};
