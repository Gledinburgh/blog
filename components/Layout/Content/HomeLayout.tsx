import HeadCard from "../Header/HeadCard";

export default function HomeLayout({ children }: any) {
  return (
    <div>

      <HeadCard />
      {children}
    </div>




  )
}
