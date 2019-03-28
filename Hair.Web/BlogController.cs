using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hair.Web
{
    public class BlogModel
    {
        [Required]
        public string Author { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Content { get; set; }
    }

    [ApiController, Route("api/blogs")]
    public class BlogController : Controller
    {
        [HttpGet]
        public List<BlogModel> Get()
        {
            return new List<BlogModel>
            {
                new BlogModel
                {
                    Title = "Hello",
                    Author = "David",
                    Content = "blablabla",
                },
                new BlogModel
                {
                    Title = "Hello2",
                    Author = "Olivier",
                    Content = "blablabla",
                }
            };
        }

        [HttpPost]
        public ActionResult<BlogModel> Post([FromBody]BlogModel model)
        {
            if (model == null) return BadRequest();
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(model);
        }
    }

    [ApiController, Route("api/blogs2")]
    public class Blog2Controller : Controller
    {
        [HttpGet]
        public Task<ActionResult<List<BlogModel>>> Get()
        {
            return Task.FromResult<ActionResult<List<BlogModel>>>(Ok(new List<BlogModel>
            {
                new BlogModel
                {
                    Title = "Hello",
                    Author = "David",
                    Content = "blablabla",
                },
                new BlogModel
                {
                    Title = "Hello2",
                    Author = "Olivier",
                    Content = "blablabla",
                }
            }));
        }

    }
}
