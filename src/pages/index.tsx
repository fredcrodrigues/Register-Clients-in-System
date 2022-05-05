import Layout from "../components/Layout"  //testabdo


export default function Home() {
  return (
    <div className={`
        flex content-center justify-center items-center h-screen 
        bg-gradient-to-r from-purple-500 to-purple-700
        text-white
        `}>

          <Layout titulo="Cadastre Simple">

            <span>Content</span>
          </Layout>
          
    </div>
  )
}
