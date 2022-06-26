import WorkOS from '@workos-inc/node'

const workos = new WorkOS(process.env.WORKOS_API_KEY)
const clientID = process.env.WORKOS_CLIENT_ID

const callbackHandler = async (req, res) => {
  try {
    const { code } = req.query
    const { profile } = await workos.sso.getProfileAndToken({
      code,
      clientID,
    })

    console.log(profile)

    res.redirect(302, `/account`)
  } catch (e) {
    res.status(400).json(req.query)
  }
}

export default callbackHandler
