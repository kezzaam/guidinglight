"use client"

import { signOut, useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { useUserContext } from "@/context/UserContext"
import Toggle from "./Toggle"
import axios from "axios"


export default function Dashboard() {
    const { userData } = useUserContext()
    // use session hook - client side session ret
    const { data: session, status } = useSession()
    const userEmail = userData.email
    console.log(userEmail)

    const [userName, setUserName] = useState('')

    useEffect(() => {
        const getName = async () => {
            try {
                const response = await axios.get(`/api/users/${encodeURIComponent(userEmail)}`);
                // Check if the response data and user object exist
                if (response.data && response.data.user && response.data.user.name) {
                    const userNameDB = response.data.user.name;
                    setUserName(userNameDB);
                } else {
                    // If the user data is not available, set userName to null
                    setUserName('');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                // If there's an error fetching data, set userName to null
                setUserName('');
            }
        };

        getName();
    }, [userEmail]);

    const [toggles, setToggles] = useState<{
        stars: boolean
        constellations: boolean
        asterisms: boolean
        celestial: boolean
    }>({
        stars: true,
        constellations: true,
        asterisms: true,
        celestial: true,
    })

    // Handle toggle state change
    const handleToggle = (toggleName: keyof typeof toggles) => {
        setToggles((prevToggles) => ({
            ...prevToggles,
            [toggleName]: !prevToggles[toggleName],
        }))
    }
    return (
        <>
            <div>
                <h2 className="mt-6 text-center text-3xl pt-24">Settings</h2>
            </div>

            <form className="mx-[5%] mt-4 bg-cetaceanblue opacity-95 rounded-lg text-intensewhite text-left text-sm p-8 flex flex-col space-y-4 lg:justify-center lg:max-w-[50%] lg:mx-auto">
                <h3 className="text-xl font-bold ">Account</h3>
                {/* Conditionally render based on whether userName exists or not */}
                {userName ? (
                    <><h2 className="mt-4 text-3xl">{userName}</h2><p>{userEmail}</p></>
                ) : (
                    <p>Not signed in</p>
                )}
                <a className="text-xl tracking-wide underline" onClick={() => signOut()}>Sign Out</a>

                <div className="separator"></div>

                <div className="py-4">

                    <h3 className="text-xl font-bold ">Discoveries</h3>


                    <div className="py-4 lg:max-w-[80%] flex flex-col space-y-8">
                        <p>
                            Choose what to include in your discoveries:
                        </p>
                        <div>
                            <div className="w-full flex flex-row items-center justify-between">
                                <h4>Stars</h4>
                                <Toggle isSelected={toggles.stars} handleClick={() => handleToggle('stars')} />
                            </div>

                            <div className="w-full flex flex-row items-center justify-between">
                                <h4>Constellations</h4>
                                <Toggle isSelected={toggles.constellations} handleClick={() => handleToggle('constellations')} />
                            </div>

                            <div className="w-full flex flex-row items-center justify-between">
                                <h4>Asterisms</h4>
                                <Toggle isSelected={toggles.asterisms} handleClick={() => handleToggle('asterisms')} />
                            </div>

                            <div className="w-full flex flex-row items-center justify-between">
                                <h4>Celestial bodies</h4>
                                <Toggle isSelected={toggles.celestial} handleClick={() => handleToggle('celestial')} />
                            </div>
                        </div>
                    </div>
                    <div className="separator"></div>
                    <div className="py-4 text-sm underline cursor-pointer flex flex-col space-y-4 chivo">
                        {/* Data Privacy */}
                            <a href="/data-privacy" className="underline">Data privacy</a>
                        {/* Support */}
                            <a href="/support" className="underline">Support</a>
                        {/* Delete Account */}
                            <a
                                onClick={() => {
                                    if (window.confirm("Are you sure you want to delete your account?")) {
                                        // Call the delete account API or function here
                                        // For example, you can use the signOut function from next-auth
                                        signOut();
                                    }
                                }}
                                className="underline cursor-pointer"
                            >
                                Delete account
                            </a>
                        </div>
                    </div>
            </form>

        </>
    )
}
