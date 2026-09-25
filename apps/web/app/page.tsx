'use client'

import { useState } from "react";
import Image from 'next/image'
import Scenario from "./components/Scenario";

type TRole = "Администратор" | "Экзаменатор" | "Проводник"

export default function Home(){
  const [name, setName] = useState<string>("Артур");
  const [newMessages, setNewMessages] = useState<boolean>(false);

  const [date, setDate] = useState<string>("14:00");
  const [title, setTitle] = useState<string>("Медицинский инцидент");
  const [description, setDescription] = useState<string>("Первая помощь пассажиру");
  const [role, setRole] = useState<TRole>("Проводник");


  return (
    <div className="py-20.5 px-7 flex flex-col gap-10">
      <div className="flex flex-row justify-between">
        <h1 className="text-accent text-[26px] font-ru-rail">Добрый день,<br/> {name}!</h1>
        {!newMessages ? (
          <Image 
            src='/svg/empty-notification.svg'
            width={30}
            height={30}
            alt="фото уведомлния"
          />
        ) : (
          <Image 
            src='/svg/alert-notification.svg'
            width={30}
            height={30}
            alt="фото уведомлния"
          />
        )}
      </div>
      <section>
        <h2 className="pb-6 font-bold">Ближайшие сценарии:</h2>
        <div className="flex overflow-x-auto space-x-4 ">
        <Scenario 
          title={title}
          description={description}
          date={date}
          role={role}
        />
        <Scenario 
          title={title}
          description={description}
          date={date}
          role={role}
        />
        </div>
      </section>
      <section>
        <h2 className="pb-6 font-bold">Рекомендованные сценарии:</h2>
        <div className="flex overflow-x-auto space-x-4">
        <Scenario 
          title={title}
          description={description}
          date={date}
          role={role}
        />
        <Scenario 
          title={title}
          description={description}
          date={date}
          role={role}
        />
        </div>
      </section>
    </div>
  )
}