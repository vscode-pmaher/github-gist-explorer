import { IUser } from "./interfaces";

export default class UserModule implements IUser {
  login = "";
  id = 0;
  nodeID = "";
  avatarURL = "";
  gravatarID = "";
  url = "";
  htmlURL = "";
  followersURL = "";
  followingURL = "";
  gistsURL = "";
  starredURL = "";
  subscriptionsURL = "";
  organizationsURL = "";
  reposURL = "";
  eventsURL = "";
  receivedEventsURL = "";
  type = "";
  siteAdmin = false;
  profile = {
    name: "",
    company: "",
    blog: "",
    location: "",
    email: "",
    hireable: "",
    bio: "",
    publicRepos: 0,
    publicGists: 0,
    followers: 0,
    following: 0,
    createdAt: "",
    updatedAt: ""
  };

  constructor(data?: any) {
    if (data) {
      this.login = data.login;
      this.id = data.id;
      this.nodeID = data.node_id;
      this.avatarURL = data.avatar_url;
      this.gravatarID = data.gravatar_id;
      this.url = data.url;
      this.htmlURL = data.html_url;
      this.followersURL = data.followers_url;
      this.followingURL = data.following_url;
      this.gistsURL = data.gists_url;
      this.starredURL = data.starred_url;
      this.subscriptionsURL = data.subscriptions_url;
      this.organizationsURL = data.organizations_url;
      this.reposURL = data.repos_url;
      this.eventsURL = data.events_url;
      this.receivedEventsURL = data.received_events_url;
      this.type = data.type;
      this.siteAdmin = data.site_admin;

      this.profile.name = data.name;
      this.profile.company = data.company;
      this.profile.blog = data.blog;
      this.profile.location = data.location;
      this.profile.email = data.email;
      this.profile.hireable = data.hireable;
      this.profile.bio = data.bio;
      this.profile.publicRepos = data.publicRepos;
      this.profile.publicGists = data.publicGists;
      this.profile.followers = data.followers;
      this.profile.following = data.following;
      this.profile.createdAt = data.createdAt;
      this.profile.updatedAt = data.updatedAt;
    }
  }
}
