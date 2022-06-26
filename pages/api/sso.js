import url from '../../lib/url'
import WorkOS from '@workos-inc/node'

const workos = new WorkOS(process.env.WORKOS_API_KEY)
const clientID = process.env.WORKOS_CLIENT_ID

const ssoApiHandler = async (req, res) => {
  try {
    const authorizationURL = workos.sso.getAuthorizationURL({
      clientID,
      organization: 'org_01G2TKRPR28XB702EF71EA8BY6',
      redirectURI: `${url}/api/callback`,
    })

    res.status(200).json({ authorizationURL })
  } catch (e) {
    res.status(400).json({ message: e.message })
  }
}

export default ssoApiHandler
