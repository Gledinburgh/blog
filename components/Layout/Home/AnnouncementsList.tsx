import Title from "../../BlogPostComponents/Title";
import GenericAnnouncment from "../../Cards/GenericAnnouncment";

export default function AnnouncementsList({ contentList }: { contentList: Array<any> }) {
  return (
    <div className=' grid gap-5 content-center justify-center grid-cols-1 md:grid-cols-2 '>

      {


        contentList.map((content, index) => {
          return (

            <div key={index + "Announcment"} className=' aspect-square bg-red-50'>
              <GenericAnnouncment content={content} />
            </div>
          )
        })
      }


    </div>
  )
}