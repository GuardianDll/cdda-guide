<script lang="ts">
import { CddaData, byName, normalizeAddictionTypes, singular } from "../data";
import ThingLink from "./ThingLink.svelte";
import type { AddictionType, ComestibleSlot } from "../types";
import { getContext } from "svelte";
import LimitedList from "../LimitedList.svelte";
import { t } from "@transifex/native";
import ItemSymbol from "./item/ItemSymbol.svelte";

export let item: AddictionType;

const data = getContext<CddaData>("data");
const _context = "Addiction Type";

const itemsWithAddictionType = data
  .byType("item")
  .filter(
    (i) =>
      i.id &&
      "addiction_type" in i &&
      normalizeAddictionTypes(i).some((a) => a.addiction === item.id)
  )
  .sort(byName);
</script>

<h1>{t("Addiction Type")}: {singular(item.type_name)}</h1>
<section>
  <dl>
    <dt>{t("Effect Name", { _context })}</dt>
    <dd>{singular(item.name)}</dd>
  </dl>
  <p style="color: var(--cata-color-gray)">{singular(item.description)}</p>
</section>

{#if itemsWithAddictionType.length}
  <section>
    <h1>{t("Items Containing", { _context })}</h1>
    <LimitedList items={itemsWithAddictionType} let:item={i}>
      <ItemSymbol item={i} />
      <ThingLink id={i.id} type="item" />
    </LimitedList>
  </section>
{/if}
