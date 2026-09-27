import Image from 'next/image'
import Backarrow from '@/components/ui/Back_arrow'

type RatingEntry = {
  place: number
  name: string
  score: string
  avatarSrc: string
}

const ratingEntries: RatingEntry[] = [
  { place: 4, name: 'Екатерина', score: '4.82', avatarSrc: '/png/rating/ekaterina.png' },
  { place: 5, name: 'Олег', score: '4.8', avatarSrc: '/png/rating/oleg.png' },
  { place: 6, name: 'Дмитрий', score: '4.74', avatarSrc: '/png/rating/dmitry.png' },
  { place: 7, name: 'Арина', score: '4.64', avatarSrc: '/png/rating/arina.png' },
  { place: 8, name: 'Ирина', score: '4.4', avatarSrc: '/png/rating/irina.png' },
]

function RatingScore({ score }: { score: string }) {
  return (
    <span className="flex shrink-0 items-center gap-1">
      <Image src="/svg/shared/star.svg" width={20} height={20} alt="" />
      <span className="text-[15px] leading-[normal] font-semibold whitespace-nowrap text-black">{score}</span>
    </span>
  )
}

type PodiumPlaceProps = {
  name: string
  score: string
  place: string
  avatarSrc: string
  avatarSize: number
  ringClassName: string
  badgeClassName: string
  badgeTextClassName: string
}

function PodiumPlace({
  name,
  score,
  place,
  avatarSrc,
  avatarSize,
  ringClassName,
  badgeClassName,
  badgeTextClassName,
}: PodiumPlaceProps) {
  const avatarClassName = avatarSize === 108 ? 'size-[108px]' : 'size-[88px]'

  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`relative ${avatarClassName}`}>
        <div className={`size-full overflow-hidden rounded-full border-4 bg-white ${ringClassName}`}>
          <Image
            src={avatarSrc}
            width={avatarSize}
            height={avatarSize}
            alt=""
            className="size-full object-cover"
          />
        </div>
        <span
          className={`absolute left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full border-[1.6px] border-white font-semibold text-white ${badgeClassName} ${badgeTextClassName}`}
        >
          {place}
        </span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="w-full text-center text-[15px] leading-[normal] font-semibold whitespace-nowrap text-black">
          {name}
        </p>
        <RatingScore score={score} />
      </div>
    </div>
  )
}

export default function RatingBoard() {
  return (
    <div className="mx-auto flex w-[min(346px,calc(100%-32px))] min-w-0 flex-col">
      <header className="relative flex h-[42px] items-center">
        <Backarrow />
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[15px] leading-[18px] font-semibold text-black">
          Рейтинг
        </h1>
      </header>

      <div className="relative mx-auto mt-6 h-[230px] w-full max-w-[340px]">
        <div className="absolute top-[88px] left-1 flex w-[88px] justify-center">
          <PodiumPlace
            name="Александр"
            score="4.96"
            place="2"
            avatarSrc="/png/rating/alexander.png"
            avatarSize={88}
            ringClassName="border-[#AEB7C4]"
            badgeClassName="bottom-[-3px] size-6 bg-[#AEB7C4]"
            badgeTextClassName="text-[13px] leading-[normal]"
          />
        </div>
        <div className="absolute top-0 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5">
          <Image src="/svg/rating/crown.svg" width={30} height={30} alt="" />
          <PodiumPlace
            name="Артур"
            score="5.00"
            place="1"
            avatarSrc="/png/profile/avatar.png"
            avatarSize={108}
            ringClassName="border-[#FFC800]"
            badgeClassName="bottom-[-5px] size-7 bg-[#FFC800]"
            badgeTextClassName="text-[15px] leading-[normal]"
          />
        </div>
        <div className="absolute top-[88px] right-1 flex w-[88px] justify-center">
          <PodiumPlace
            name="Мария"
            score="4.85"
            place="3"
            avatarSrc="/png/rating/maria.png"
            avatarSize={88}
            ringClassName="border-[#D98A5B]"
            badgeClassName="bottom-[-5px] size-6 bg-[#D98A5B]"
            badgeTextClassName="text-[13px] leading-[normal]"
          />
        </div>
      </div>

      <ol className="mt-6 flex flex-col gap-2.5">
        {ratingEntries.map((entry) => (
          <li
            key={entry.place}
            className="flex items-center justify-between rounded-[20px] border border-[#EAEAEA] bg-white px-4 py-3"
          >
            <div className="flex items-center gap-4">
              <span className="text-[15px] leading-[normal] font-semibold text-black">{entry.place}</span>
              <span className="flex items-center gap-2.5">
                <Image
                  src={entry.avatarSrc}
                  width={36}
                  height={36}
                  alt=""
                  className="size-9 rounded-full object-cover"
                />
                <span className="text-[13px] leading-[normal] font-semibold whitespace-nowrap text-black">
                  {entry.name}
                </span>
              </span>
            </div>
            <RatingScore score={entry.score} />
          </li>
        ))}
      </ol>
    </div>
  )
}