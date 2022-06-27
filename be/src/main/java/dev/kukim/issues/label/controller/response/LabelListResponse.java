package dev.kukim.issues.label.controller.response;


import java.util.List;
import lombok.Getter;

@Getter
public class LabelListResponse {

	private final Long labelsCount;
	private final Long openedMilestonesCount;
	private final List<LabelResponse> labelResponses;

	public LabelListResponse(Long labelsCount, Long openedMilestonesCount,
		List<LabelResponse> labelResponses) {
		this.labelsCount = labelsCount;
		this.openedMilestonesCount = openedMilestonesCount;
		this.labelResponses = labelResponses;
	}
}
