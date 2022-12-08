using Rekboo.Model;
using Rekboo.Model.Requests;
using Rekboo.Model.SearchObjects;
using Rekboo.Services;

namespace Rekboo.Controllers
{
    public class PlannerController : BaseCRUDController<Planner, PlannerSearchObject, PlannerUpsertRequest, PlannerUpsertRequest>
    {

        public PlannerController(IPlannerService plannerService) : base(plannerService)
        {
        }
    }
}
