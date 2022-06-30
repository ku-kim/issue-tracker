package dev.kukim.issues.milestone.service;

import dev.kukim.issues.common.domain.Status;
import dev.kukim.issues.label.domain.repository.LabelRepository;
import dev.kukim.issues.milestone.controller.request.MilestoneCreateRequest;
import dev.kukim.issues.milestone.controller.request.MilestoneUpdateRequest;
import dev.kukim.issues.milestone.controller.response.MilestoneResponse;
import dev.kukim.issues.milestone.controller.response.MilestoneListResponse;
import dev.kukim.issues.milestone.domain.Milestone;
import dev.kukim.issues.milestone.domain.repository.MileStoneRepository;
import dev.kukim.issues.milestone.exception.MilestoneNotFoundException;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MilestoneService {

	public static final boolean OPEND = true;
	public static final boolean CLOSED = false;
	private final MileStoneRepository mileStoneRepository;
	private final LabelRepository labelRepository;

	public MilestoneListResponse showMilestoneBySearch(String milestoneStatus) {
		boolean statusBoolean = Status.statusToBoolean(milestoneStatus);

		List<MilestoneResponse> milestoneRespons = mileStoneRepository.findAllByIsOpen(
				statusBoolean)
			.stream()
			.map(MilestoneResponse::createBy)
			.collect(Collectors.toList());

		long labelsCount = labelRepository.count();
		long openedMilestonesCount = mileStoneRepository.countByIsOpen(OPEND);
		long closedMilestonesCount = mileStoneRepository.countByIsOpen(CLOSED);

		return new MilestoneListResponse(labelsCount,
			openedMilestonesCount,
			closedMilestonesCount,
			milestoneRespons);
	}

	public MilestoneResponse insertMilestone(MilestoneCreateRequest request) {
		Milestone milestone = Milestone.of(request.getTitle(),
			request.getDescription(),
			request.getDueDate());

		Milestone insertedMilestone = mileStoneRepository.save(milestone);

		return MilestoneResponse.createBy(insertedMilestone);
	}

	public MilestoneResponse updateMilestone(Long milestoneId,
		MilestoneUpdateRequest request) {
		Milestone findMilestone = mileStoneRepository.findById(milestoneId)
			.orElseThrow(MilestoneNotFoundException::new);

		findMilestone.update(request.getTitle(),
			request.getDescription(),
			request.getDueDate(),
			request.getOpen());

		Milestone updatedMilestone = mileStoneRepository.save(findMilestone);

		return MilestoneResponse.createBy(updatedMilestone);
	}

	public void removeMilestone(Long milestoneId) {
		Milestone findMilestone = mileStoneRepository.findById(milestoneId)
			.orElseThrow(MilestoneNotFoundException::new);

		mileStoneRepository.delete(findMilestone);
	}
}
