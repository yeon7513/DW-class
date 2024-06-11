'use strict';

// 플레이리스트
const playlistInfoArr = [
  { thumb: 'img_playlist_1', title: '여행을 떠나요', artist: 'DW Music' },
  {
    thumb: 'img_playlist_2',
    title: '금요일 저녁 카페에서',
    artist: 'DW Music',
  },
  { thumb: 'img_playlist_3', title: '일에 집중할 시간', artist: 'DW Music' },
  { thumb: 'img_playlist_4', title: '몰디브 한 잔', artist: 'DW Music' },
  { thumb: 'img_playlist_5', title: 'K-Pop 믹스', artist: 'DW Music' },
  { thumb: 'img_playlist_6', title: '공부를 위한 클래식', artist: 'DW Music' },
  { thumb: 'img_playlist_7', title: '한국 시티팝 20선', artist: 'DW Music' },
  { thumb: 'img_playlist_8', title: '편안하게 느긋하게', artist: 'DW Music' },
  {
    thumb: 'img_playlist_9',
    title: '고요한 밤을 위한 BGM',
    artist: 'DW Music',
  },
];

const playlists = document.getElementById('playlists');

playlistInfoArr.forEach((info) => {
  playlists.insertAdjacentHTML(
    'beforeend',
    `
      <div class="playlist">
        <img
          class="playlist-thumb"
          src="./resources/images/${info.thumb}.png"
          alt=""
        />
        <div class="playlist-title">${info.title}</div>
        <div class="playlist-artist">${info.artist}</div>
      </div>
    `
  );
});

// 아티스트
const artistNameArr = [
  'Neon 5',
  '곤잘레스',
  '케이시 킹',
  'Frake',
  '체인스모킹',
];

const artists = document.getElementById('artists');

artistNameArr.forEach((name, idx) => {
  artists.insertAdjacentHTML(
    'beforeend',
    `
      <div class="artist">
        <img
          class="artist-profile"
          src="./resources/images/img_artist_${idx + 1}.png"
          alt=""
        />
        <div class="artist-name">${name}</div>
      </div>
  `
  );
});

// 스테이션
const stations = document.getElementById('stations');

for (let i = 1; i < 10; i++) {
  stations.insertAdjacentHTML(
    'beforeend',
    `
      <div class="station">
        <img
          class="station-thumb"
          src="./resources/images/img_station_${i}.png"
          alt=""
        />
      </div>
    `
  );
}

// 이달의 Top100
const chartsArr = [
  {
    change: 'up',
    title: '사건의 수평선',
    artist: '은하',
  },
  {
    change: 'down',
    title: 'FRAGILE',
    artist: '세라핌',
  },
  {
    change: 'no',
    title: 'Hype Girl',
    artist: 'OldJeans',
  },
  {
    change: 'no',
    title: '사랑은 늘 찾아와',
    artist: '임빌런',
  },
  {
    change: 'up',
    title: 'Black Venom',
    artist: 'PinkPink',
  },
  {
    change: 'down',
    title: '취중고백',
    artist: '멜로',
  },
  {
    change: 'up',
    title: 'Snowman',
    artist: '지아',
  },
  {
    change: 'up',
    title: 'Hollywood',
    artist: '검정바지',
  },
  {
    change: 'down',
    title: 'I Think I Like Her',
    artist: '찰리 원더',
  },
  {
    change: 'no',
    title: 'London',
    artist: '체인스모킹',
  },
];

const charts = document.getElementById('charts');

chartsArr.forEach((chart, idx) => {
  charts.insertAdjacentHTML(
    'beforeend',
    `
      <li class="chart">
      <img
        class="chart-cover"
        src="./resources/images/img_chart_${idx + 1}.png"
        alt=""
      />
      <div class="chart-info">
        <div class="chart-rank">
          <div class="chart-number">${idx + 1}</div>
          <span class="chart-change ${chart.change}">
            ${chart.change == 'up' ? '▲' : chart.change == 'down' ? '▼' : '─'}
          </span>
        </div>
        <div>
          <div class="chart-title">${chart.title}</div>
          <div class="chart-artist">${chart.artist}</div>
        </div>
      </div>
    </li>
  `
  );
});

// if (chart.change == 'up') {
//   '▲'
// } else if (chart.change == 'down') {
//   '▼'
// } else {
//   '-'
// }
