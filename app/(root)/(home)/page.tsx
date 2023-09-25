import SearchForm from "@/components/form/SearchForm"
import Filters from "@/components/shared/Filters"
import { Button } from "@/components/ui/button"
import { getResources } from "@/sanity/action"

export default async function Home() {

  try {
    const resources = await getResources({
      query : "",
      category : "",
      page : "1"
    });
  
    console.log("s",resources);
  } catch (error) {
    console.log(error);
  }
  

  return (
    <main
      className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col"
    >
      <section
        className="nav-padding w-full"
      >
        <div
          className="flex-center relative min-h-[274px] w-full flex-col rounded-xl
           bg-banner bg-cover bg-center  text-center"
        >
          <h1
            className="sm:heading1 heading2 mb-6  text-center text-white"
          >
             JavaScript Mastery Resources
          </h1>
        </div>
        <SearchForm />
      </section>
      
      <Filters />
    </main>
  )
}