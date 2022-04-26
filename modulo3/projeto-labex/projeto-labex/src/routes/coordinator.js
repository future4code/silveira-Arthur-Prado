
export const goBack = (navigate) => {
    navigate(-1)
}

export const goToHomePage = (navigate) => {
    navigate("/")
}



export const goToTripsPage = (navigate) => {
    navigate("/trips/list")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToApplicationFormPage = (navigate) => {
    navigate ("/trips/application")
}

export const goToLoginPage = (navigate) => {
    navigate("/trips/login")
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}