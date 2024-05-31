export default async function Dashboard() {
    const session = await getSession()
    const userRole = session?.user?.role // Assuming 'role' is part of the session object
   
    if (userRole === 'admin') {
      return <AdminDashboard /> // Component for admin users
    } else if (userRole === 'user') {
      return <UserDashboard /> // Component for regular users
    } else {
      return <AccessDenied /> // Component shown for unauthorized access
    }
  }