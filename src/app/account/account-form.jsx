'use client'

import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

export default function AccountForm({ session }) {
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState(null)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const user = session?.user

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    }
    catch (error) {
      alert('Error loading user data!')
    }
    finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)

      let { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    }
    catch (error) {
      alert('Error updating the data!')
    }
    finally {
      setLoading(false)
    }
  }

  /*
    return (
      <div className="form-widget">
        <div>
          <label htmlFor="email">Email: </label>
          <input id="email" type="text" value={session?.user.email} disabled />
        </div>
        <div>
          <label htmlFor="fullName">Nombre completo: </label>
          <input
            id="fullName"
            type="text"
            value={fullname || ''}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="userName">Nombre de usuario: </label>
          <input
            id="username"
            type="text"
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="webSite">Sitio WEB: </label>
          <input
            id="website"
            type="url"
            value={website || ''}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
  
        <div>
          <button
            className="button primary block"
            onClick={() => updateProfile({ fullname, username, website, avatar_url })}
            disabled={loading}
          >
            {loading ? 'Loading ...' : 'Update'}
          </button>
        </div>
  
        <div>
          <form action="/auth/signout" method="post">
            <button  type="submit">
              Cerar
            </button>
          </form>
        </div>
      </div>
    )
  
   */

  return (
    <>

      <nav id="navbar" class="fixed top-0 z-40 flex w-full flex-row justify-end bg-gray-700 px-4 sm:justify-between">
        <ul class="breadcrumb hidden flex-row items-center py-4 text-lg text-white sm:flex">
          <form action="/auth/signout" method="post">
            <button type="submit">
              Salir
            </button>
          </form>
          <ul>
            <div>
              {''}
            </div>
          </ul>


            <Link href="/account/form">Programas</Link>
         
          

        </ul>

        <ul class="breadcrumb hidden flex-row items-center py-4 text-lg text-white sm:flex">
  
          <div class="flex justify-center ">
            {fullname || ''}
            <img
            className="object-cover w-20 h-20 rounded-full"
            src={user.user_metadata.avatar_url}
            alt=""/>
          </div>
        </ul>

      </nav>

      <div>
        <h1>.</h1>
        <h1>.</h1>

      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Programación
                <br className="hidden md:block" />
                Desarrollo de software{' '}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                La programación orientada a objetos; es un paradigma de programación que parte del concepto de "objetos" como base, los cuales contienen información en forma de campos y código en forma de métodos.
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    Python
                  </h6>
                  <p className="text-sm text-gray-900">
                    Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código, se utiliza para desarrollar aplicaciones de todo tipo, por ejemplo: Instagram, Netflix, Spotify, Panda3D, entre otros.
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    JavaScript
                  </h6>
                  <p className="text-sm text-gray-900">
                    JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://t3.ftcdn.net/jpg/05/95/86/68/360_F_595866810_5MUb99dOylJIuvU2mcDDpkx6qj4WdS7c.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

