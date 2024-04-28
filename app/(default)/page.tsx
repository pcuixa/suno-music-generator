"use client";

import { useState } from "react";

import Hero from "@/components/hero";
import Input from "@/components/input";
import { Music } from "@/types/music";

const data = {
  "isFinish": true,
  "list": [
      {
          "song_name": "纽约人在西安",
          "lyric": "\n从纽约来到西安\n走上了这个舞台\n天降美人给了一吻\n我看见了中国的妖精\n大街小巷都在晃\n疯狂的城市从不眠\n过去的忧伤全部抛在身后\n在这里我找到了家\n\n\n与朋友一起找乐子\n在这个城市永不停歇\n西安的光芒刺破黑夜\n我爱这里的人们\n纽约的炸弹落下\n每个人在大家庭里扎根\n对于这个城市是我最好的礼物\n一起舞蹈，尽情疯狂\n\n\n纽约人在西安跳华彩\n炸裂的音乐，掌声喝采\n我们在舞动的狂欢中成长\n纽约人在西安跳翩跹\n这里的夜晚永不停歇\n我们的节奏融入这个城市的脉搏",
          "song_url": "https://audiopipe.suno.ai/?item_id=59576546-c140-45a3-a3b6-b2f3c6a3d3b4"
      },
      {
          "song_name": "纽约人在西安",
          "lyric": "\n从纽约来到西安\n走上了这个舞台\n天降美人给了一吻\n我看见了中国的妖精\n大街小巷都在晃\n疯狂的城市从不眠\n过去的忧伤全部抛在身后\n在这里我找到了家\n\n\n与朋友一起找乐子\n在这个城市永不停歇\n西安的光芒刺破黑夜\n我爱这里的人们\n纽约的炸弹落下\n每个人在大家庭里扎根\n对于这个城市是我最好的礼物\n一起舞蹈，尽情疯狂\n\n\n纽约人在西安跳华彩\n炸裂的音乐，掌声喝采\n我们在舞动的狂欢中成长\n纽约人在西安跳翩跹\n这里的夜晚永不停歇\n我们的节奏融入这个城市的脉搏",
          "song_url": "https://audiopipe.suno.ai/?item_id=aed4d7d1-1539-459b-b84b-ccfe32f945d5"
      }
  ]
}

export default function () {
  const [music, setMusic] = useState<Music[]>(data.list);

  return (
    <div className="md:mt-16">
      <div className="max-w-3xl mx-auto">
        <Hero />

        <div className="flex flex-col mx-auto my-12 flex max-w-2xl justify-center">
          <Input setMusic={setMusic} />
        </div>

        <div className="flex mt-6 mx-auto justify-around max-w-2xl gap-4">
          {
            music && music.map((music, index) => (
              <div key={index} className="flex flex-col rounded-xl bg-clip-border text-white shadow-md">
                <div className="p-4">
                  <audio className="h-6 mx-auto" controls src={music.song_url} />
                </div>
                <div className="p-4 pt-0">
                  <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {music.song_name}
                  </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased max-h-60 verscroll-y-auto overflow-y-scroll" dangerouslySetInnerHTML={{
                    __html: music.lyric?.replace?.(/\n{1,2}/g, "<br>") ?? ''
                  }} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
