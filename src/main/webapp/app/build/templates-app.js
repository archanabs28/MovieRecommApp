angular.module('templates-app', ['about/about.tpl.html', 'account/account.tpl.html', 'account/list.tpl.html', 'admin/admin.tpl.html', 'admin/movies.tpl.html', 'admin/user-stats.tpl.html', 'admin/users.tpl.html', 'auth/login.tpl.html', 'auth/register.tpl.html', 'category/category.tpl.html', 'category/language.tpl.html', 'home/home.tpl.html', 'movie/languages.tpl.html', 'movie/movie.tpl.html', 'movie/movies.tpl.html', 'movie/recommended.tpl.html', 'search/search.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/account.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/account.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <div class=\"mdl-grid\">\n" +
    "        <div class=\"mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone\"></div>\n" +
    "        <div class=\"demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col\">\n" +
    "            <div class=\"mdl-grid mdl-grid--no-spacing\">\n" +
    "                <div class=\"mdl-cell mdl-cell--4-col-desktop\" align=\"center\">\n" +
    "                    <div style=\"background: url('https://image.flaticon.com/icons/svg/306/306473.svg') center / cover; width:150px; height: 150px;\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"mdl-cell mdl-cell--8-col-desktop\">\n" +
    "                    <br>\n" +
    "                    <h4>{{user.firstName}} {{user.lastName}}</h4>\n" +
    "                    <p>{{user.emailId}}</p>\n" +
    "                </div>\n" +
    "                <div class=\"mdl-cell mdl-cell--12-col-desktop\">\n" +
    "                    <h5>Stats</h5>\n" +
    "                    <hr>\n" +
    "                    <table width=\"100%\" ng-if=\"common_pie_data!=''\">\n" +
    "                        <tr>\n" +
    "                            <td align=\"center\">\n" +
    "                                <h6 align=\"center\" style=\"\">Rated, Watched and Favorites</h6>\n" +
    "                                <canvas id=\"common_pie\" class=\"chart chart-pie\" chart-data=\"common_pie_data\" chart-labels=\"common_pie_labels\"></canvas>\n" +
    "                            </td>\n" +
    "                            <td align=\"center\">\n" +
    "                                <h6 align=\"center\" style=\"\">Trending Genre</h6>\n" +
    "                                <canvas id=\"trending_movies_bar\" class=\"chart chart-bar\"chart-data=\"movies_bar_data\" chart-options=\"movies_bar_options\" chart-labels=\"movies_bar_labels\" chart-series=\"movies_bar_series\"></canvas>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                    <table width=\"60%\" align=\"center\" ng-if=\"common_pie_data==''\">\n" +
    "                        <tr>\n" +
    "                            <td align=\"center\">\n" +
    "                                <h6 align=\"center\" style=\"\">Trending Genre</h6>\n" +
    "                                <canvas id=\"trending_movies_bar\" class=\"chart chart-bar\"chart-data=\"movies_bar_data\" chart-options=\"movies_bar_options\" chart-labels=\"movies_bar_labels\" chart-series=\"movies_bar_series\"></canvas>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "                <div class=\"mdl-cell mdl-cell--12-col-desktop\">\n" +
    "                    <h5>Profile</h5>\n" +
    "                    <hr>\n" +
    "                    <div class=\"mdl-cell mdl-cell--12-col-desktop setting_option\">\n" +
    "                        <a href=\"#\" class=\"mdl-button mdl-js-button mdl-button--raised\" ui-sref=\"list({type: 'Watched'})\">Watched</a>\n" +
    "                        <a href=\"#\" class=\"mdl-button mdl-js-button mdl-button--raised\" ui-sref=\"list({type: 'Favorites'})\">Favorites</a>\n" +
    "                        <a href=\"#\" class=\"mdl-button mdl-js-button mdl-button--raised\" ui-sref=\"list({type: 'Rated'})\">Rated</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"mdl-cell mdl-cell--12-col-desktop\">\n" +
    "                    <h5>Settings</h5>\n" +
    "                    <hr>\n" +
    "                    <div class=\"mdl-cell mdl-cell--12-col-desktop setting_option\">\n" +
    "                        <a id=\"show-password-dialog\" class=\"mdl-button mdl-js-button mdl-button--raised\" ng-click=\"openPasswordModal()\">Update Password</a>\n" +
    "                        <dialog class=\"mdl-dialog\" id=\"password-dialog\">\n" +
    "                            <h4 class=\"mdl-dialog__title\" align=\"center\">Update Password</h4>\n" +
    "                            <div class=\"mdl-dialog__content\">\n" +
    "                                <form action=\"#\">\n" +
    "                                    <div class=\"mdl-grid\">\n" +
    "                                        <!-- Password -->\n" +
    "                                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                                <input class=\"mdl-textfield__input\" type=\"password\" ng-model=\"update.password\" id=\"password\">\n" +
    "                                                <label class=\"mdl-textfield__label\" for=\"password\">Password</label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <!-- Confrim Password -->\n" +
    "                                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                                <input class=\"mdl-textfield__input\" type=\"password\" ng-model=\"update.confirm_password\" id=\"confirm_password\">\n" +
    "                                                <label class=\"mdl-textfield__label\" for=\"confirm_password\">Confrim Password</label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </form>\n" +
    "                            </div>\n" +
    "                            <div class=\"mdl-dialog__actions\">\n" +
    "                                <button type=\"button\" class=\"mdl-button mdl-button--colored\" ng-click=\"updatePassword()\">Update</button>\n" +
    "                                <button type=\"button\" class=\"mdl-button mdl-button--colored close\" ng-click=\"closePasswordModal()\">Close</button>\n" +
    "                            </div>\n" +
    "                        </dialog>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <br><br><br>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<dialog id=\"change-password\" class=\"mdl-dialog mdl-typography--text-center\">\n" +
    "    <span class=\"close\">&times;</span>\n" +
    "    <h4 class=\"mdl-dialog__title\">Hello World</h4>\n" +
    "    <div class=\"mdl-dialog__content\">\n" +
    "        <p>This is some content</p>\n" +
    "    </div>\n" +
    "</dialog>");
}]);

angular.module("account/list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/list.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <div class=\"mdl-grid\">\n" +
    "        <div class=\"mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone\"></div>\n" +
    "        <div class=\"demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col\">\n" +
    "            <div align=\"center\"><h1>{{type}}</h1></div>\n" +
    "            <div class=\"mdl-grid mdl-grid--no-spacing\" ng-repeat=\"movie in movies\" style=\"padding-bottom: 20px\">\n" +
    "                <div class=\"mdl-cell mdl-cell--4-col-desktop\" align=\"center\" ui-sref=\"movie({id:movie.movieid})\" style=\"cursor: pointer;\">\n" +
    "                    <div style=\"background: url('https://image.tmdb.org/t/p/original/{{movie.poster_path}}') center / cover; width:150px; height: 200px;\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"mdl-cell mdl-cell--8-col-desktop\">\n" +
    "                    <br>\n" +
    "                    <h4 id=\"movie_{{$index+1}}\" ui-sref=\"movie({id:movie.movieid})\" style=\"cursor: pointer;\">{{movie.moviename}}</h4>\n" +
    "                    <p>Genre: {{movie.genres}}</p>\n" +
    "                    <p>{{movie.overview | limitTo: 120}}{{movie.overview.length > 130 ? '...' : ''}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <br><br><br>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <div class=\"mdl-grid\">\n" +
    "        <div class=\"mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone\"></div>\n" +
    "        <div class=\"demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col\">\n" +
    "            <div class=\"mdl-grid mdl-grid--no-spacing\">\n" +
    "                <div class=\"mdl-cell mdl-cell--4-col-desktop\" align=\"center\">\n" +
    "                    <div style=\"background: url('https://image.flaticon.com/icons/svg/306/306473.svg') center / cover; width:150px; height: 150px;\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"mdl-cell mdl-cell--8-col-desktop\">\n" +
    "                    <br>\n" +
    "                    <h4>{{user.firstName}} {{user.lastName}}</h4>\n" +
    "                    <p>{{user.emailId}}</p>\n" +
    "                </div>\n" +
    "                <div class=\"mdl-cell mdl-cell--12-col\">\n" +
    "                    <h6 align=\"center\" style=\"\">Movies by Year</h6>\n" +
    "                    <canvas id=\"movies_bar\" class=\"chart chart-bar\" chart-options=\"movies_bar_options\" chart-data=\"movies_bar_data\" chart-labels=\"movies_bar_labels\" chart-series=\"movies_bar_series\"></canvas>\n" +
    "                    <h6 align=\"center\" style=\"\">Trending Movies</h6>\n" +
    "                    <canvas id=\"trending_movies_line\" class=\"chart chart-line\" chart-options=\"trending_movies_line_options\" chart-data=\"trending_movies_line_data\" chart-labels=\"trending_movies_line_labels\" chart-series=\"trending_movies_line_series\"></canvas>\n" +
    "                    <h6 align=\"center\" style=\"\">Top Rated Movies</h6>\n" +
    "                    <canvas id=\"rated_movies_line\" class=\"chart chart-line\" chart-options=\"rated_movie_line_options\" chart-data=\"rated_movie_line_data\" chart-labels=\"rated_movie_line_labels\" chart-series=\"rated_movies_line_series\"></canvas>\n" +
    "                    <br>\n" +
    "                </div>\n" +
    "                <div class=\"mdl-cell mdl-cell--12-col-desktop\">\n" +
    "                    <h5>Manage</h5>\n" +
    "                    <hr>\n" +
    "                    <div class=\"mdl-cell mdl-cell--12-col-desktop setting_option\">\n" +
    "                        <a href=\"#\" class=\"mdl-button mdl-js-button mdl-button--raised\" ui-sref=\"admin_users\">Users</a>\n" +
    "                        <a href=\"#\" class=\"mdl-button mdl-js-button mdl-button--raised\" ui-sref=\"admin_movies\">Movies</a>\n" +
    "                        <a id=\"show-movie-dialog\" class=\"mdl-button mdl-js-button mdl-button--raised\" ng-click=\"openMovieModal()\">Add Movie</a>\n" +
    "                        <dialog class=\"mdl-dialog\" id=\"movie-dialog\">\n" +
    "                            <h4 class=\"mdl-dialog__title\" align=\"center\">Add Movie</h4>\n" +
    "                            <div class=\"mdl-dialog__content\">\n" +
    "                                <form action=\"#\">\n" +
    "                                    <div class=\"mdl-grid\">\n" +
    "                                        <!-- Name -->\n" +
    "                                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                                <input class=\"mdl-textfield__input\" type=\"text\" ng-model=\"movie.movieName\" id=\"movieName\">\n" +
    "                                                <label class=\"mdl-textfield__label\" for=\"movieName\">Name<sup>*</sup></label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <!-- Genre -->\n" +
    "                                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                                <input class=\"mdl-textfield__input\" type=\"text\" ng-model=\"movie.genre\" id=\"genre\">\n" +
    "                                                <label class=\"mdl-textfield__label\" for=\"genre\">Genre<sup>*</sup></label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <!-- Collection -->\n" +
    "                                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                                <input class=\"mdl-textfield__input\" type=\"text\" ng-model=\"movie.belongs_to_collection\" id=\"belongs_to_collection\">\n" +
    "                                                <label class=\"mdl-textfield__label\" for=\"belongs_to_collection\">Collection</label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <!-- Language -->\n" +
    "                                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                                <input class=\"mdl-textfield__input\" type=\"text\" ng-model=\"movie.original_language\" id=\"original_language\">\n" +
    "                                                <label class=\"mdl-textfield__label\" for=\"original_language\">Language<sup>*</sup></label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <!-- Overview -->\n" +
    "                                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                                <input class=\"mdl-textfield__input\" type=\"text\" ng-model=\"movie.overview\" id=\"overview\">\n" +
    "                                                <label class=\"mdl-textfield__label\" for=\"overview\">Overview<sup>*</sup></label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <!-- Popularity -->\n" +
    "                                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                                <input class=\"mdl-textfield__input\" type=\"text\" ng-model=\"movie.popularity\" id=\"popularity\"  ng-value=\"0\">\n" +
    "                                                <label class=\"mdl-textfield__label\" for=\"popularity\">Popularity</label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <!-- Poster -->\n" +
    "                                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                                <input class=\"mdl-textfield__input\" type=\"text\" ng-model=\"movie.poster_path\" id=\"poster_path\">\n" +
    "                                                <label class=\"mdl-textfield__label\" for=\"poster_path\">Poster</label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <!-- Production -->\n" +
    "                                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                                <input class=\"mdl-textfield__input\" type=\"text\" ng-model=\"movie.productionID\" id=\"productionID\">\n" +
    "                                                <label class=\"mdl-textfield__label\" for=\"productionID\">Production House</label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <!-- Release -->\n" +
    "                                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                                <input class=\"mdl-textfield__input\" type=\"date\" ng-model=\"movie.release_date\" id=\"release_date\">\n" +
    "                                                <label class=\"mdl-textfield__label\" for=\"release_date\">Release Date<sup>*</sup></label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <!-- Runtime -->\n" +
    "                                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                                <input class=\"mdl-textfield__input\" type=\"text\" ng-model=\"movie.runtime\" id=\"runtime\">\n" +
    "                                                <label class=\"mdl-textfield__label\" for=\"runtime\">Runtime</label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <!-- Vote Average -->\n" +
    "                                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                                <input class=\"mdl-textfield__input\" type=\"text\" ng-model=\"movie.vote_average\" id=\"vote_average\" ng-value=\"0\">\n" +
    "                                                <label class=\"mdl-textfield__label\" for=\"vote_average\">Vote Average</label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <!-- Poster -->\n" +
    "                                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                                <input class=\"mdl-textfield__input\" type=\"text\" ng-model=\"movie.vote_count\" id=\"vote_count\" ng-value=\"0\">\n" +
    "                                                <label class=\"mdl-textfield__label\" for=\"vote_count\">Vote Count</label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </form>\n" +
    "                            </div>\n" +
    "                            <div class=\"mdl-dialog__actions\">\n" +
    "                                <button type=\"button\" class=\"mdl-button mdl-button--colored\" ng-click=\"addMovie()\">Update</button>\n" +
    "                                <button type=\"button\" class=\"mdl-button mdl-button--colored close\" ng-click=\"closeMovieModal()\">Close</button>\n" +
    "                            </div>\n" +
    "                        </dialog>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <br><br><br>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<dialog id=\"change-password\" class=\"mdl-dialog mdl-typography--text-center\">\n" +
    "    <span class=\"close\">&times;</span>\n" +
    "    <h4 class=\"mdl-dialog__title\">Hello World</h4>\n" +
    "    <div class=\"mdl-dialog__content\">\n" +
    "        <p>This is some content</p>\n" +
    "    </div>\n" +
    "</dialog>");
}]);

angular.module("admin/movies.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/movies.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <div class=\"mdl-grid\">\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">\n" +
    "            <h2>Movies</h2>\n" +
    "        </div>\n" +
    "        <div class=\"mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop\">\n" +
    "            <div class=\"demo-list-action mdl-list\" ng-repeat=\"movie in movies\">\n" +
    "                <div class=\"mdl-list__item\">\n" +
    "                    <span class=\"mdl-list__item-primary-content\">\n" +
    "                        <i class=\"material-icons mdl-list__item-avatar\">videocam</i>\n" +
    "                        <span>{{movie.movieName}}</span>\n" +
    "                        <span style=\"font-weight: 100\">&nbsp;({{movie.genres}})</span>\n" +
    "                    </span>\n" +
    "                    <a class=\"mdl-list__item-secondary-action\" ui-sref=\"movie({id:movie.movieId})\"><i class=\"material-icons\">show_chart</i>Stats</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">\n" +
    "            <button class=\"mdl-button mdl-js-button mdl-button--primary\" ng-click=\"loadMore()\">Load more</button>\n" +
    "        </div>\n" +
    "        <br><br><br>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("admin/user-stats.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/user-stats.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <div class=\"mdl-grid\">\n" +
    "        <div class=\"mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone\"></div>\n" +
    "        <div class=\"demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col\">\n" +
    "            <div class=\"mdl-grid mdl-grid--no-spacing\">\n" +
    "                <div class=\"mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset\" align=\"center\">\n" +
    "                    <div style=\"background: url('https://image.flaticon.com/icons/svg/306/306473.svg') center / cover; width:150px; height: 150px;\"></div>\n" +
    "                    <h4>{{thisUser.firstName}} {{thisUser.lastName}}</h4>\n" +
    "                    <p>{{thisUser.emailId}}</p>\n" +
    "                </div>\n" +
    "                <div class=\"mdl-cell mdl-cell--12-col-desktop\" ng-hide=\"rating_bar_data=='' && common_pie_data==''\">\n" +
    "                    <h5>Stats</h5>\n" +
    "                    <hr>\n" +
    "                    <td align=\"center\">\n" +
    "                        <h6 align=\"center\" style=\"\">User Ratings</h6>\n" +
    "                        <canvas id=\"user_rating_bar\" class=\"chart chart-line\"chart-data=\"rating_bar_data\" chart-options=\"rating_bar_options\" chart-labels=\"rating_bar_labels\"></canvas>\n" +
    "                    </td>\n" +
    "                    <td >\n" +
    "                        <h6 align=\"center\" style=\"\">Rated, Watched and Favorites</h6>\n" +
    "                        <canvas id=\"common_pie\" class=\"chart chart-pie\" chart-data=\"common_pie_data\" chart-labels=\"common_pie_labels\"></canvas>\n" +
    "                    </td>\n" +
    "                </div>\n" +
    "                <div class=\"mdl-cell mdl-cell--12-col-desktop\" ng-show=\"rating_bar_data=='' && common_pie_data==''\">\n" +
    "                    <td align=\"center\">\n" +
    "                        <h6 align=\"center\">No Data!</h6>\n" +
    "                    </td>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <br><br><br>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("admin/users.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/users.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <div class=\"mdl-grid\">\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">\n" +
    "            <h2>Users</h2>\n" +
    "        </div>\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\" ng-hide=\"isLoaded\" style=\"padding: 50px;\">\n" +
    "            <div id=\"loader\" class=\"mdl-progress mdl-js-progress mdl-progress__indeterminate\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop\" ng-show=\"isLoaded\">\n" +
    "            <div class=\"demo-list-action mdl-list\">\n" +
    "                <div class=\"mdl-list__item\" ng-repeat=\"user in users\" ng-if=\"user.type == 'user'\">\n" +
    "                    <span class=\"mdl-list__item-primary-content\">\n" +
    "                        <i class=\"material-icons mdl-list__item-avatar\">perm_identity</i>\n" +
    "                        <span>{{user.firstName}} {{user.lastName}}</span>\n" +
    "                        <span style=\"font-weight: 100\">&nbsp;({{user.emailId}})</span>\n" +
    "                    </span>\n" +
    "                    <a class=\"mdl-list__item-secondary-action\" ui-sref=\"user_stats({id:user.userId})\"><i class=\"material-icons\">show_chart</i>Stats</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">\n" +
    "            <button class=\"mdl-button mdl-js-button mdl-button--primary\" ng-click=\"loadMore()\">Load more</button>\n" +
    "        </div>\n" +
    "        <br><br><br>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("auth/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/login.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <br><br><br>\n" +
    "    <div class=\"mdl-grid\">\n" +
    "        <div class=\"mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop\">\n" +
    "            <div class=\"login-card mdl-card mdl-shadow--2dp\">\n" +
    "                <br>\n" +
    "                <span class=\"card-title\">Login</span>\n" +
    "                <form ng-submit=\"login()\">\n" +
    "                    <div class=\"mdl-grid\">\n" +
    "                        <!-- Email -->\n" +
    "                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                <input class=\"mdl-textfield__input\" ng-model=\"user.name\" type=\"text\" id=\"email\">\n" +
    "                                <label class=\"mdl-textfield__label\" for=\"email\">Email</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <!-- Password -->\n" +
    "                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                <input class=\"mdl-textfield__input\" ng-model=\"user.password\" type=\"password\" id=\"password\">\n" +
    "                                <label class=\"mdl-textfield__label\" for=\"password\">Password</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <!-- Remember -->\n" +
    "                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                            <label class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\" for=\"remember_login\">\n" +
    "                                <input type=\"checkbox\" id=\"remember_login\" class=\"mdl-checkbox__input\" checked>\n" +
    "                                <span class=\"mdl-checkbox__label\">Remember me</span>\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <!-- Submit -->\n" +
    "                        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">\n" +
    "                            <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" type=\"submit\">\n" +
    "                                Submit\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                        <!-- Forgot -->\n" +
    "                        <div class=\"mdl-cell mdl-cell--12-col\" align=\"right\">\n" +
    "                            <a class=\"forgot_link\" href=\"#\">Forgot password?</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br><br><br>\n" +
    "</div>");
}]);

angular.module("auth/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/register.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <br><br><br>\n" +
    "    <div class=\"mdl-grid\">\n" +
    "        <div class=\"mdl-cell mdl-cell--6-col mdl-cell--3-offset-desktop\">\n" +
    "            <div class=\"login-card mdl-card mdl-shadow--2dp\">\n" +
    "                <br>\n" +
    "                <span class=\"card-title\">Register</span>\n" +
    "                <form ng-submit=\"register()\" enctype=\"multipart/form-data\">\n" +
    "                    <div class=\"mdl-grid\">\n" +
    "                        <!-- Name -->\n" +
    "                        <div class=\"mdl-cell mdl-cell--4-col mdl-cell--2-offset-desktop\">\n" +
    "                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                <input class=\"mdl-textfield__input\" ng-model=\"user.firstName\" type=\"text\" id=\"firstName\">\n" +
    "                                <label class=\"mdl-textfield__label\" for=\"firstName\">First Name</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"mdl-cell mdl-cell--4-col \">\n" +
    "                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                <input class=\"mdl-textfield__input\" ng-model=\"user.lastName\" type=\"text\" id=\"lastName\">\n" +
    "                                <label class=\"mdl-textfield__label\" for=\"lastName\">Last Name</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <!-- Email -->\n" +
    "                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                <input class=\"mdl-textfield__input\" ng-model=\"user.emailId\" type=\"text\" id=\"emailId\">\n" +
    "                                <label class=\"mdl-textfield__label\" for=\"emailId\">Email</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <!-- Password -->\n" +
    "                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                <input class=\"mdl-textfield__input\" ng-model=\"user.password\" type=\"password\" id=\"password\">\n" +
    "                                <label class=\"mdl-textfield__label\" for=\"password\">Password</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <!-- Confirm Password -->\n" +
    "                        <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                            <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                <input class=\"mdl-textfield__input\" ng-model=\"user.confirm_password\" type=\"password\" id=\"confirm_password\">\n" +
    "                                <label class=\"mdl-textfield__label\" for=\"confirm_password\">Confirm Password</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <!-- Submit -->\n" +
    "                        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">\n" +
    "                            <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" type=\"submit\">\n" +
    "                                Register\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                        <!-- Forgot -->\n" +
    "                        <div class=\"mdl-cell mdl-cell--12-col\" align=\"right\">\n" +
    "                            <div class=\"forgot_link\">\n" +
    "                                Already have an account? <a href=\"#\">Login</a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br><br><br>\n" +
    "</div>");
}]);

angular.module("category/category.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("category/category.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <div class=\"mdl-grid\">\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">\n" +
    "            <h2>Categories</h2>\n" +
    "        </div>\n" +
    "        <div class=\"mdl-cell mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone\"></div>\n" +
    "        <div class=\"mdl-cell mdl-cell--10-col\">\n" +
    "            <style>\n" +
    "                .mdl-grid .mdl-card{\n" +
    "                    margin-left: 5px;\n" +
    "                    margin-right: 5px;\n" +
    "                    margin-top: 10px;\n" +
    "                    margin-bottom: 10px;\n" +
    "                    min-height: 150px;\n" +
    "                }\n" +
    "                .mdl-grid .mdl-card .mdl-card__title .mdl-card__title-text{\n" +
    "                    text-align: center;\n" +
    "                    margin: auto;\n" +
    "                    color: white;\n" +
    "                }\n" +
    "                .this-mdl div{\n" +
    "                    cursor: pointer;\n" +
    "                    background-color: rgb(63,81,181);\n" +
    "                }\n" +
    "            </style>\n" +
    "            <div class=\"mdl-grid mdl-grid--no-spacing this-mdl\">\n" +
    "                <div class=\"mdl-card mdl-shadow--2dp\" ng-show=\"isLoggedIn()\" ui-sref=\"recommended\">\n" +
    "                    <div class=\"mdl-card__title mdl-card--expand\">\n" +
    "                        <h2 class=\"mdl-card__title-text\">Recommended</h2>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"mdl-card mdl-shadow--2dp\" ng-repeat=\"movie in movies\">\n" +
    "                    <div id=\"movie_{{$index+1}}\" class=\"mdl-card__title mdl-card--expand\" ui-sref=\"movies({genre: movie.route})\">\n" +
    "                        <h2 class=\"mdl-card__title-text\">{{movie.genre}}</h2>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <br><br><br>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("category/language.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("category/language.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <div class=\"mdl-grid\">\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">\n" +
    "            <h2>Languages</h2>\n" +
    "        </div>\n" +
    "        <div class=\"mdl-cell mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone\"></div>\n" +
    "        <div class=\"mdl-cell mdl-cell--10-col\">\n" +
    "            <style>\n" +
    "                .mdl-grid .mdl-card{\n" +
    "                    margin-left: 5px;\n" +
    "                    margin-right: 5px;\n" +
    "                    margin-top: 10px;\n" +
    "                    margin-bottom: 10px;\n" +
    "                    min-height: 150px;\n" +
    "                }\n" +
    "                .mdl-grid .mdl-card .mdl-card__title .mdl-card__title-text{\n" +
    "                    text-align: center;\n" +
    "                    margin: auto;\n" +
    "                    color: white;\n" +
    "                }\n" +
    "                .this-mdl div{\n" +
    "                    cursor: pointer;\n" +
    "                    background-color: rgb(63,81,181);\n" +
    "                }\n" +
    "            </style>\n" +
    "            <div class=\"mdl-grid mdl-grid--no-spacing this-mdl\">\n" +
    "                <div class=\"mdl-card mdl-shadow--2dp\" ng-repeat=\"lang in languages\">\n" +
    "                    <div id=\"movie_{{$index+1}}\" class=\"mdl-card__title mdl-card--expand\" ui-sref=\"language({language: lang.code})\">\n" +
    "                        <h2 class=\"mdl-card__title-text\">{{lang.lang}}</h2>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <br><br><br>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<header class=\"body_header mdl-card\" style=\"width: 100%\">\n" +
    "  <div ng-style=\"customStyle\" style=\"background: url('https://image.tmdb.org/t/p/original/{{movieTitle.poster_path}}') center / cover; height: 500px; width:100%;\">\n" +
    "        <span style=\"position: absolute; padding-top: 400px; padding-left: 25px;\">\n" +
    "          <h5>{{movieTitle.movieName}}</h5></span>\n" +
    "  </div>\n" +
    "</header>\n" +
    "<div class=\"page-content\">\n" +
    "  <div class=\"mdl-grid\">\n" +
    "      <!-- ****************** Latest ****************** -->\n" +
    "      <div class=\"mdl-cell mdl-cell--12-col\">\n" +
    "        <h4>Latest</h4>\n" +
    "      </div>\n" +
    "      <div ng-repeat=\"movie in moviesLatest\" class=\"mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone\">\n" +
    "        <div class=\"mrp-card-square mdl-card mdl-shadow--2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.poster_path}})'}\" style=\"color: #fff; background: center / cover;\">\n" +
    "          <div class=\"mdl-card__title mdl-card--expand\" ></div>\n" +
    "          <div class=\"mdl-card__actions\">\n" +
    "            <span class=\"mrp-card-filename\"><a id=\"movie_latest_{{$index + 1}}\" ui-sref=\"movie({id:movie.movieId})\">{{movie.movieName}}</a></span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    <!-- ****************** Top Rated ****************** -->\n" +
    "    <div class=\"mdl-cell mdl-cell--12-col\">\n" +
    "      <h4>Top Rated</h4>\n" +
    "    </div>\n" +
    "    <div ng-repeat=\"movie in moviesTopRated\" class=\"mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone\">\n" +
    "      <div class=\"mrp-card-square mdl-card mdl-shadow--2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.poster_path}})'}\" style=\"color: #fff; background: center / cover;\">\n" +
    "        <div class=\"mdl-card__title mdl-card--expand\" ></div>\n" +
    "        <div class=\"mdl-card__actions\">\n" +
    "          <span class=\"mrp-card-filename\"><a id=\"movie_rated_{{$index + 1}}\" ui-sref=\"movie({id:movie.movieid})\">{{movie.moviename}}</a></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- ****************** Bollywood ****************** -->\n" +
    "    <div class=\"mdl-cell mdl-cell--12-col\">\n" +
    "      <h4>Bollywood</h4>\n" +
    "    </div>\n" +
    "    <div ng-repeat=\"movie in moviesBollywood\" class=\"mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone\">\n" +
    "      <div class=\"mrp-card-square mdl-card mdl-shadow--2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.poster_path}})'}\" style=\"color: #fff; background: center / cover;\">\n" +
    "        <div class=\"mdl-card__title mdl-card--expand\" ></div>\n" +
    "        <div class=\"mdl-card__actions\">\n" +
    "          <span class=\"mrp-card-filename\"><a  id=\"movie_bollywood_{{$index + 1}}\" ui-sref=\"movie({id:movie.movieId})\">{{movie.movieName}}</a></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- ****************** Japanese ****************** -->\n" +
    "    <div class=\"mdl-cell mdl-cell--12-col\">\n" +
    "      <h4>Japanese</h4>\n" +
    "    </div>\n" +
    "    <div ng-repeat=\"movie in moviesJapanese\" class=\"mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone\">\n" +
    "      <div class=\"mrp-card-square mdl-card mdl-shadow--2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.poster_path}})'}\" style=\"color: #fff; background: center / cover;\">\n" +
    "        <div class=\"mdl-card__title mdl-card--expand\" ></div>\n" +
    "        <div class=\"mdl-card__actions\">\n" +
    "          <span class=\"mrp-card-filename\"><a id=\"movie_japanese_{{$index + 1}}\" ui-sref=\"movie({id:movie.movieId})\">{{movie.movieName}}</a></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- ****************** Action ****************** -->\n" +
    "    <div class=\"mdl-cell mdl-cell--12-col\">\n" +
    "      <h4>Action</h4>\n" +
    "    </div>\n" +
    "    <div ng-repeat=\"movie in moviesAction\" class=\"mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone\">\n" +
    "      <div class=\"mrp-card-square mdl-card mdl-shadow--2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.poster_path}})'}\" style=\"color: #fff; background: center / cover;\">\n" +
    "        <div class=\"mdl-card__title mdl-card--expand\" ></div>\n" +
    "        <div class=\"mdl-card__actions\">\n" +
    "          <span class=\"mrp-card-filename\"><a id=\"movie_action_{{$index + 1}}\" ui-sref=\"movie({id:movie.movieId})\">{{movie.movieName}}</a></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- ****************** Comedy ****************** -->\n" +
    "    <div class=\"mdl-cell mdl-cell--12-col\">\n" +
    "      <h4>Comedy</h4>\n" +
    "    </div>\n" +
    "    <div ng-repeat=\"movie in moviesComedy\" class=\"mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone\">\n" +
    "      <div class=\"mrp-card-square mdl-card mdl-shadow--2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.poster_path}})'}\" style=\"color: #fff; background: url('') center / cover;\">\n" +
    "        <div class=\"mdl-card__title mdl-card--expand\" ></div>\n" +
    "        <div class=\"mdl-card__actions\">\n" +
    "          <span class=\"mrp-card-filename\"><a id=\"movie_comedy_{{$index + 1}}\" ui-sref=\"movie({id:movie.movieId})\">{{movie.movieName}}</a></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- ****************** Horror ****************** -->\n" +
    "    <div class=\"mdl-cell mdl-cell--12-col\">\n" +
    "      <h4>Horror</h4>\n" +
    "    </div>\n" +
    "    <div ng-repeat=\"movie in moviesHorror\" class=\"mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone\">\n" +
    "      <div class=\"mrp-card-square mdl-card mdl-shadow--2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.poster_path}})'}\" style=\"color: #fff; background: center / cover;\">\n" +
    "        <div class=\"mdl-card__title mdl-card--expand\" ></div>\n" +
    "        <div class=\"mdl-card__actions\">\n" +
    "          <span class=\"mrp-card-filename\"><a id=\"movie_Horror_{{$index + 1}}\" ui-sref=\"movie({id:movie.movieId})\">{{movie.movieName}}</a></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br><br><br>\n" +
    "</div>");
}]);

angular.module("movie/languages.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("movie/languages.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <div class=\"mdl-grid\">\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">\n" +
    "            <h2>{{language}}</h2>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"movie in movies\" class=\"mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone\">\n" +
    "            <div class=\"mrp-card-square mdl-card mdl-shadow--2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.poster_path}})'}\" style=\"color: #fff; background: center / cover;\">\n" +
    "                <div class=\"mdl-card__title mdl-card--expand\" ></div>\n" +
    "                <div class=\"mdl-card__actions\">\n" +
    "                    <span class=\"mrp-card-filename\">\n" +
    "                        <a id=\"movie_{{$index+1}}\" ui-sref=\"movie({id:movie.movieId})\">{{movie.movieName}}</a>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!--<div ng-repeat=\"movie in movies\" class=\"mdl-cell mdl-cell&#45;&#45;2-col mdl-cell&#45;&#45;4-col-tablet mdl-cell&#45;&#45;6-col-phone\">-->\n" +
    "            <!--<div class=\"mrp-card-square mdl-card mdl-shadow&#45;&#45;2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.POSTER_PATH}})'}\" style=\"color: #fff; background: center / cover;\">-->\n" +
    "                <!--<div class=\"mdl-card__title mdl-card&#45;&#45;expand\" ></div>-->\n" +
    "                <!--<div class=\"mdl-card__actions\">-->\n" +
    "                    <!--<span class=\"mrp-card-filename\"><a ui-sref=\"movie({id:movie.MOVIEID})\">{{movie.MOVIENAME}}</a></span>-->\n" +
    "                <!--</div>-->\n" +
    "            <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "        <br><br>\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">\n" +
    "            <button class=\"mdl-button mdl-js-button mdl-button--primary\" ng-click=\"loadMore()\">Load more</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br><br><br>\n" +
    "</div>");
}]);

angular.module("movie/movie.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("movie/movie.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <div class=\"mdl-grid mdl-grid--no-spacing\">\n" +
    "        <div class=\"mdl-cell mdl-cell--4-col\">\n" +
    "            <div class=\"mrp-card-movie mdl-card mdl-shadow--2dp\" style=\"color: #fff; background: url('https://image.tmdb.org/t/p/original/{{movie.poster_path}}') center / cover;\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"mdl-cell mdl-cell--8-col\">\n" +
    "            <div class=\"mdl-cell mdl-cell--12-col\">\n" +
    "                <h3>{{movie.movieName}}</h3>\n" +
    "                <span class=\"mdl-chip\">\n" +
    "                  <span class=\"mdl-chip__text\">{{movie.runtime}}</span>\n" +
    "                </span>\n" +
    "                <span class=\"mdl-chip\">\n" +
    "                  <span class=\"mdl-chip__text\">{{movie.genres}}</span>\n" +
    "                </span>\n" +
    "                <span class=\"mdl-chip\">\n" +
    "                  <span class=\"mdl-chip__text\">{{movie.release_date}}</span>\n" +
    "                </span>\n" +
    "                <span class=\"mdl-chip\">\n" +
    "                  <span class=\"mdl-chip__text\">{{movie.original_language | uppercase}}</span>\n" +
    "                </span>\n" +
    "                <div class=\"movie-info\">\n" +
    "                    <p>{{movie.overview}}</p>\n" +
    "                </div>\n" +
    "                <div class=\"movie-cast\">\n" +
    "                    <h6>Total Votes: <span style=\"font-weight: 300\">{{movie.vote_count}}</span></h6>\n" +
    "                    <h6>Popularity: <span style=\"font-weight: 300\">{{movie.popularity}}</span></h6>\n" +
    "                    <h6>Production house: <span style=\"font-weight: 300\">{{movie.productionID}}</span></h6>\n" +
    "                </div>\n" +
    "                <br><br>\n" +
    "                <div>\n" +
    "                    <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary\" ng-click=\"toFavorite()\">Add to favorite</button>\n" +
    "                    <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary\" ng-click=\"toWatched()\">Add to watched</button>\n" +
    "                    <a id=\"show-rating-dialog\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary\" ng-click=\"openUpdateModal()\">Rate movie</a>\n" +
    "                    <dialog class=\"mdl-dialog\" id=\"rating-dialog\">\n" +
    "                        <h4 class=\"mdl-dialog__title\" align=\"center\">Add Rating</h4>\n" +
    "                        <div class=\"mdl-dialog__content\">\n" +
    "                            <form action=\"#\">\n" +
    "                                <div class=\"mdl-grid\">\n" +
    "                                    <div class=\"mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop\">\n" +
    "                                        <div class=\"mdl-textfield mdl-js-textfield\" style=\"width: 100%;\">\n" +
    "                                            <input class=\"mdl-slider mdl-js-slider\" type=\"range\" min=\"0\" max=\"5\" value=\"{{movie_rating}}\" ng-model=\"rating.value\" step=\"0.25\" tabindex=\"0\">\n" +
    "                                            <div align=\"center\"><span style=\"font-size: larger; font-weight: 100; font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif\">{{rating.value}}</span></div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                        </div>\n" +
    "                        <div class=\"mdl-dialog__actions\">\n" +
    "                            <button type=\"button\" class=\"mdl-button mdl-button--colored\" ng-click=\"addRating()\">Update</button>\n" +
    "                            <button type=\"button\" class=\"mdl-button mdl-button--colored close\" ng-click=\"closeUpdateModal()\">Close</button>\n" +
    "                        </div>\n" +
    "                    </dialog>\n" +
    "                </div>\n" +
    "                <!-- Ripple -->\n" +
    "                <div class=\"rating-ripple\">\n" +
    "                    <p><i class=\"material-icons\">grade</i> <span>{{movie.vote_average}}</span></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <table width=\"100%\" align=\"center\" ng-if=\"common_pie_data!=''\">\n" +
    "                <tr>\n" +
    "                    <td align=\"center\" width=\"80%\">\n" +
    "                        <h6 align=\"center\" style=\"\">Rating</h6>\n" +
    "                        <canvas id=\"common_pie\" class=\"chart chart-pie\" chart-data=\"common_pie_data\" chart-labels=\"common_pie_labels\"></canvas>\n" +
    "                    </td>\n" +
    "                    <td align=\"center\">\n" +
    "                        <h6 align=\"center\" style=\"\">Movie Stats</h6>\n" +
    "                        <canvas id=\"movie_stats_bar\" class=\"chart chart-bar\"chart-data=\"movie_stats_bar_data\" chart-options=\"movie_stats_bar_options\" chart-labels=\"movie_stats_bar_labels\" chart-series=\"movie_stats_bar_series\"></canvas>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr><td><br></td></tr>\n" +
    "            </table>\n" +
    "            <table width=\"60%\" align=\"center\" ng-if=\"common_pie_data==''\">\n" +
    "                <tr>\n" +
    "                    <td align=\"center\">\n" +
    "                        <h6 align=\"center\" style=\"\">Movie Stats</h6>\n" +
    "                        <canvas id=\"movie_stats_bar\" class=\"chart chart-bar\"chart-data=\"movie_stats_bar_data\" chart-options=\"movie_stats_bar_options\" chart-labels=\"movie_stats_bar_labels\" chart-series=\"movie_stats_bar_series\"></canvas>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr><td><br></td></tr>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "        <br><br><br>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("movie/movies.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("movie/movies.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <div class=\"mdl-grid\">\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">\n" +
    "            <h2>{{genre}}</h2>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"movie in movies\" class=\"mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone\">\n" +
    "            <div class=\"mrp-card-square mdl-card mdl-shadow--2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.poster_path}})'}\" style=\"color: #fff; background: center / cover;\">\n" +
    "                <div class=\"mdl-card__title mdl-card--expand\" ></div>\n" +
    "                <div class=\"mdl-card__actions\">\n" +
    "                    <span class=\"mrp-card-filename\">\n" +
    "                        <a id=\"movie_{{$index+1}}\" ui-sref=\"movie({id:movie.movieid})\">{{movie.moviename}}</a>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!--<div ng-repeat=\"movie in movies\" class=\"mdl-cell mdl-cell&#45;&#45;2-col mdl-cell&#45;&#45;4-col-tablet mdl-cell&#45;&#45;6-col-phone\">-->\n" +
    "            <!--<div class=\"mrp-card-square mdl-card mdl-shadow&#45;&#45;2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.POSTER_PATH}})'}\" style=\"color: #fff; background: center / cover;\">-->\n" +
    "                <!--<div class=\"mdl-card__title mdl-card&#45;&#45;expand\" ></div>-->\n" +
    "                <!--<div class=\"mdl-card__actions\">-->\n" +
    "                    <!--<span class=\"mrp-card-filename\"><a ui-sref=\"movie({id:movie.MOVIEID})\">{{movie.MOVIENAME}}</a></span>-->\n" +
    "                <!--</div>-->\n" +
    "            <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "        <br><br>\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">\n" +
    "            <button class=\"mdl-button mdl-js-button mdl-button--primary\" ng-click=\"loadMore()\">Load more</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br><br><br>\n" +
    "</div>");
}]);

angular.module("movie/recommended.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("movie/recommended.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <div class=\"mdl-grid\">\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">\n" +
    "            <h2>Recommendations</h2>\n" +
    "        </div>\n" +
    "        <!-- ****************** Based on watched ****************** -->\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\">\n" +
    "            <h4>Based on watched</h4>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"movie in moviesWatched\" class=\"mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone\">\n" +
    "            <div class=\"mrp-card-square mdl-card mdl-shadow--2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.poster_path}})'}\" style=\"color: #fff; background: center / cover;\">\n" +
    "                <div class=\"mdl-card__title mdl-card--expand\" ></div>\n" +
    "                <div class=\"mdl-card__actions\">\n" +
    "                    <span class=\"mrp-card-filename\"><a id=\"movie_watched_{{$index+1}}\" ui-sref=\"movie({id:movie.movieid})\">{{movie.moviename}}</a></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- ****************** Based on favorites ****************** -->\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\">\n" +
    "            <h4>Based on favorites</h4>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"movie in moviesFavorites\" class=\"mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone\">\n" +
    "            <div class=\"mrp-card-square mdl-card mdl-shadow--2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.poster_path}})'}\" style=\"color: #fff; background: center / cover;\">\n" +
    "                <div class=\"mdl-card__title mdl-card--expand\" ></div>\n" +
    "                <div class=\"mdl-card__actions\">\n" +
    "                    <span class=\"mrp-card-filename\"><a id=\"movie_favorites_{{$index+1}}\" ui-sref=\"movie({id:movie.movieid})\">{{movie.moviename}}</a></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- ****************** Based on search ****************** -->\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\">\n" +
    "            <h4>Based on search</h4>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"movie in moviesSearch\" class=\"mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone\">\n" +
    "            <div class=\"mrp-card-square mdl-card mdl-shadow--2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.poster_path}})'}\" style=\"color: #fff; background: center / cover;\">\n" +
    "                <div class=\"mdl-card__title mdl-card--expand\" ></div>\n" +
    "                <div class=\"mdl-card__actions\">\n" +
    "                    <span class=\"mrp-card-filename\"><a id=\"movie_search_{{$index+1}}\" ui-sref=\"movie({id:movie.movieid})\">{{movie.moviename}}</a></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- ****************** Top Rated ****************** -->\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\">\n" +
    "            <h4>Based on rating</h4>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"movie in moviesRated\" class=\"mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone\">\n" +
    "            <div class=\"mrp-card-square mdl-card mdl-shadow--2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.poster_path}})'}\" style=\"color: #fff; background: center / cover;\">\n" +
    "                <div class=\"mdl-card__title mdl-card--expand\" ></div>\n" +
    "                <div class=\"mdl-card__actions\">\n" +
    "                    <span class=\"mrp-card-filename\"><a id=\"movie_rated_{{$index+1}}\" ui-sref=\"movie({id:movie.movieid})\">{{movie.moviename}}</a></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("search/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/search.tpl.html",
    "<div class=\"page-content\">\n" +
    "    <div class=\"mdl-grid\">\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col\" align=\"center\">\n" +
    "            <h2><span style=\"font-weight: 300; font-size: large;\">Search query:</span> {{keyword}}</h2>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"movie in movies\" class=\"mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone\">\n" +
    "            <div class=\"mrp-card-square mdl-card mdl-shadow--2dp\" ng-style=\"{'background-image':'url(https://image.tmdb.org/t/p/original/{{movie.poster_path}})'}\" style=\"color: #fff; background: center / cover;\">\n" +
    "                <div class=\"mdl-card__title mdl-card--expand\" ></div>\n" +
    "                <div class=\"mdl-card__actions\">\n" +
    "                    <span class=\"mrp-card-filename\"><a ui-sref=\"movie({id:movie.movieId})\">{{movie.movieName}}</a></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"mdl-cell mdl-cell--12-col pagination\" align=\"center\">\n" +
    "            <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect\"><</button>\n" +
    "            &nbsp;&nbsp;&nbsp;\n" +
    "            <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect\">1</button>\n" +
    "            <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect\">2</button>\n" +
    "            <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect\">3</button>\n" +
    "            <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect\">4</button>\n" +
    "            <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect\">5</button>\n" +
    "            <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect\">6</button>\n" +
    "            &nbsp;&nbsp;&nbsp;\n" +
    "            <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect\">></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br><br><br>\n" +
    "</div>");
}]);
