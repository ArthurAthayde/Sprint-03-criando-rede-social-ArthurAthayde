import { suggestUsers } from "./database.js";
import { followBtnToggle, suggestRender } from "./followSugestion.js";
import { posts } from "./database.js";
import { renderPosts } from "./posts.js";
import { renderModal } from "./modal.js";


suggestRender(suggestUsers);
followBtnToggle();
renderPosts(posts);
renderModal(posts);