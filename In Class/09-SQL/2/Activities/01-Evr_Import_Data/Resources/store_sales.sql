
select s.store_id, sum(p.amount) as "gross amount"
from payment as p
join rental as r
on p.rental_id = r.rental_id
join inventory as i
on i.inventory_id = r.inventory_id
join store as s
on s.store_id = i.store_id
group by s.store_id
order by "gross amount" desc

