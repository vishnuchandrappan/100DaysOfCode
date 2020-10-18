import { Types as AuthTypes } from './auth';
import { Types as UiTypes } from './ui';
import { Types as ApiTypes } from './api';
import { Types as UserTypes } from './user';
import { Types as BlogPostTypes } from './blog_post'
import { Types as CommentsTypes } from './comments';
import { Types as TagsTypes } from './tags';

export const Types = {
  ...AuthTypes,
  ...UiTypes,
  ...ApiTypes,
  ...UserTypes,
  ...BlogPostTypes,
  ...CommentsTypes,
  ...TagsTypes
}

export {
  loginRequest,
  signupRequest,
  loginSuccess
} from './auth';

export {
  setSubmitting,
  resetSubmitting,
  showSuccessToast,
  showDangerToast,
  showInfoToast,
  showWarningToast,
  showToast,
  showCommentBar,
  hideCommentBar
} from './ui';

export {
  apiRequest,
  authApiRequest
} from './api'

export { userRequest } from './user';

export {
  initialBlogPostsRequest,
  likeBlogPost,
  createComment,
  createBlogPost
} from './blog_post'

export {
  getCommentsRequest,
  likeComment
} from './comments';

export {
  getTags,
} from './tags'