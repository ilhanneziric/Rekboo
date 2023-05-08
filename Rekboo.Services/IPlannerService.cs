using Rekboo.Model;
using Rekboo.Model.Requests;
using Rekboo.Model.SearchObjects;

namespace Rekboo.Services
{
    public interface IPlannerService : ICRUDService<Planner, PlannerSearchObject, PlannerUpsertRequest, PlannerUpsertRequest>
    {
    }
}
